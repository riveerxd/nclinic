#!/usr/bin/env python3
"""Regenerate the whole favicon / app-icon set in public/ from the brand vector.

Single source of truth is the inline tooth SVG in app/components/navbar.vue (viewBox 0 0 2200 2200),
so the favicon can never drift from the logo shown in the header.

Design: gray-900 (#111827) tooth outline on an opaque white field -- the same look the site has
always had. The white field is deliberate: it keeps the dark mark legible on a light browser
tabstrip AND keeps the chip visible on a dark one, and iOS requires an opaque apple-touch-icon.

Every size is rendered natively from the vector rather than letting the browser downscale one
32px raster, and the stroke is optically thickened / the padding tightened at small sizes so the
outline still reads at 16-20px. The .ico carries 16/32/48 (48 is Google Search's documented
minimum favicon size).

Requires: python3 with Pillow, and `rsvg-convert` (librsvg) on PATH.
Usage:     python3 scripts/generate-favicons.py
"""
import os
import re
import struct
import subprocess
import tempfile

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAVBAR = os.path.join(ROOT, "app", "components", "navbar.vue")
PUBLIC = os.path.join(ROOT, "public")

MARK = "#111827"   # tailwind gray-900, matches navbar `text-gray-900`
PLATE = "#ffffff"  # opaque white field
VB = 2200          # source viewBox
SS = 4             # supersample factor for plate/corner antialiasing
RENDER = 1600      # px to rasterize the vector at before downscaling

# canvas -> (stroke_width, mark_scale, corner_radius_fraction)
SIZES = {
    16:  (190, 0.86, 0.13),
    32:  (160, 0.84, 0.14),
    48:  (135, 0.82, 0.15),
    64:  (120, 0.80, 0.15),
    96:  (105, 0.80, 0.16),
    192: (88,  0.78, 0.17),
    512: (80,  0.76, 0.18),
}


def brand_path():
    """Pull the tooth path data out of the navbar component."""
    src = open(NAVBAR, encoding="utf-8").read()
    svg = re.search(r'<svg[^>]*viewBox="0 0 2200 2200".*?</svg>', src, re.S)
    if not svg:
        raise SystemExit(f"could not find the 2200x2200 brand SVG in {NAVBAR}")
    paths = re.findall(r'<path[^>]*\sd="([^"]+)"', svg.group(0), re.S)
    if len(paths) != 1:
        raise SystemExit(f"expected exactly 1 <path> in the brand SVG, found {len(paths)}")
    return " ".join(paths[0].split())


PATH_D = brand_path()


def path_tag(stroke_width):
    return (
        f'<path fill="{MARK}" stroke="{MARK}" stroke-width="{stroke_width}" '
        f'stroke-linejoin="round" stroke-linecap="round" d="{PATH_D}"/>'
    )


def _rasterize(svg, w, h):
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as f:
        f.write(svg)
        src = f.name
    dst = src + ".png"
    subprocess.run(["rsvg-convert", "-w", str(w), "-h", str(h), src, "-o", dst], check=True)
    im = Image.open(dst).convert("RGBA")
    im.load()
    os.unlink(src)
    os.unlink(dst)
    return im


def _mark_svg(stroke_width):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VB} {VB}">'
        f"{path_tag(stroke_width)}</svg>"
    )


_cache = {}


def render_mark(stroke_width):
    """Mark on transparent at high res, cropped to its ink bbox."""
    if stroke_width not in _cache:
        im = _rasterize(_mark_svg(stroke_width), RENDER, RENDER)
        _cache[stroke_width] = im.crop(im.split()[3].getbbox())
    return _cache[stroke_width]


def compose(size, stroke_width, mark_scale, radius_frac):
    """White plate (rounded if radius_frac > 0) with the mark centred on it."""
    big = size * SS
    plate = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(plate)
    if radius_frac > 0:
        d.rounded_rectangle([0, 0, big - 1, big - 1], radius=int(big * radius_frac), fill=PLATE)
    else:
        d.rectangle([0, 0, big - 1, big - 1], fill=PLATE)

    m = render_mark(stroke_width)
    target = int(round(big * mark_scale))
    w, h = m.size
    if h >= w:
        nh, nw = target, max(1, int(round(w * target / h)))
    else:
        nw, nh = target, max(1, int(round(h * target / w)))
    m = m.resize((nw, nh), Image.LANCZOS)
    plate.alpha_composite(m, ((big - nw) // 2, (big - nh) // 2))
    return plate.resize((size, size), Image.LANCZOS)


def build_svg(canvas=512, stroke_width=150, mark_scale=0.84, radius_frac=0.16):
    """Vector favicon, geometry matched to the rasters."""
    x0, y0, x1, y1 = _rasterize(_mark_svg(stroke_width), VB, VB).split()[3].getbbox()
    bw, bh = x1 - x0, y1 - y0
    k = (canvas * mark_scale) / max(bw, bh)
    tx = canvas / 2 - k * (x0 + bw / 2)
    ty = canvas / 2 - k * (y0 + bh / 2)
    r = round(canvas * radius_frac, 2)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {canvas} {canvas}" '
        f'width="{canvas}" height="{canvas}">'
        f'<rect width="{canvas}" height="{canvas}" rx="{r}" ry="{r}" fill="{PLATE}"/>'
        f'<g transform="translate({tx:.2f} {ty:.2f}) scale({k:.5f})">{path_tag(stroke_width)}</g>'
        f"</svg>\n"
    )


def _bmp_entry(im):
    """One classic 32bpp BITMAPINFOHEADER ICO entry (XOR bitmap + 1bpp AND mask, bottom-up).

    Pillow's ICO writer emits PNG-compressed entries; classic BMP entries match what the site
    originally shipped and keep the widest decoder compatibility.
    """
    im = im.convert("RGBA")
    w, h = im.size
    px = im.load()

    xor = bytearray()
    for y in range(h - 1, -1, -1):
        for x in range(w):
            r, g, b, a = px[x, y]
            xor += bytes((b, g, r, a))

    row_bytes = ((w + 31) // 32) * 4
    mask = bytearray()
    for y in range(h - 1, -1, -1):
        row = bytearray(row_bytes)
        for x in range(w):
            if px[x, y][3] < 128:
                row[x // 8] |= 0x80 >> (x % 8)
        mask += row

    hdr = struct.pack("<IiiHHIIiiII", 40, w, h * 2, 1, 32, 0, w * h * 4, 11811, 11811, 0, 0)
    return bytes(hdr + xor + mask)


def write_ico(images, path):
    images = sorted(images, key=lambda i: i.size[0])
    blobs = [_bmp_entry(im) for im in images]
    out = bytearray(struct.pack("<HHH", 0, 1, len(blobs)))
    offset = 6 + 16 * len(blobs)
    for im, blob in zip(images, blobs):
        w, h = im.size
        out += struct.pack("<BBBBHHII", 0 if w >= 256 else w, 0 if h >= 256 else h,
                           0, 0, 1, 32, len(blob), offset)
        offset += len(blob)
    for blob in blobs:
        out += blob
    open(path, "wb").write(out)


def main():
    built = {s: compose(s, *cfg) for s, cfg in SIZES.items()}

    def out(name):
        return os.path.join(PUBLIC, name)

    write_ico([built[16], built[32], built[48]], out("favicon.ico"))
    open(out("favicon.svg"), "w").write(build_svg())
    built[96].save(out("favicon-96x96.png"), optimize=True)
    built[192].save(out("web-app-manifest-192x192.png"), optimize=True)
    built[512].save(out("web-app-manifest-512x512.png"), optimize=True)

    # apple-touch-icon: full-bleed opaque square, iOS applies its own corner mask
    compose(180, 95, 0.62, 0).convert("RGB").save(out("apple-touch-icon.png"), optimize=True)
    # maskable Android icon: content kept inside the 80% safe circle
    compose(512, 85, 0.50, 0).convert("RGB").save(
        out("web-app-manifest-maskable-512x512.png"), optimize=True)
    # logo.png is referenced by the JSON-LD Organization schema in nuxt.config.ts
    compose(512, 80, 0.76, 0.18).convert("RGB").save(out("logo.png"), optimize=True)

    for name in ["favicon.ico", "favicon.svg", "favicon-96x96.png", "apple-touch-icon.png",
                 "web-app-manifest-192x192.png", "web-app-manifest-512x512.png",
                 "web-app-manifest-maskable-512x512.png", "logo.png"]:
        print(f"  public/{name:42s} {os.path.getsize(out(name)):7d} B")


if __name__ == "__main__":
    main()
