<script setup lang="ts">
// GallerySection - Masonry-style clinic gallery
import { ref, onMounted } from 'vue'

interface GalleryImage {
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'normal'
}

const images: GalleryImage[] = [
  { src: '/images/dental-surgery-room-wide.webp', alt: 'Chirurgická místnost', span: 'wide' },
  { src: '/images/clinic-waiting-room-interior.webp', alt: 'Čekárna' },
  { src: '/images/dental-surgery-room-chair.webp', alt: 'Zubařské křeslo', span: 'tall' },
  { src: '/images/clinic-interior-decoration.webp', alt: 'Interiér kliniky' },
  { src: '/images/dental-surgery-room-equipment.webp', alt: 'Vybavení' },
  { src: '/images/clinic-waiting-room-hallway.webp', alt: 'Chodba čekárny', span: 'wide' },
  { src: '/images/dental-surgery-room-xray.webp', alt: 'Rentgen', span: 'tall' },
  { src: '/images/clinic-office-doors.webp', alt: 'Vstup do ordinace' },
  { src: '/images/clinic-appointment-card.webp', alt: 'Objednávka' },
]

const mounted = ref(false)
const lightboxOpen = ref(false)
const lightboxImage = ref<GalleryImage | null>(null)
const lightboxIndex = ref(0)

onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})

const openLightbox = (image: GalleryImage, index: number) => {
  lightboxImage.value = image
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  lightboxImage.value = null
  document.body.style.overflow = ''
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.length
  lightboxImage.value = images[lightboxIndex.value]
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length
  lightboxImage.value = images[lightboxIndex.value]
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section id="galerie" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <!-- Section Header -->
    <div
      :class="[
        'text-center mb-16 transition-all duration-700',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div class="flex items-center justify-center mb-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent"></div>
        <div class="mx-4 px-6 py-2 border-2 border-gray-900/10 rounded-full backdrop-blur-xl bg-white/30">
          <span class="text-gray-900 text-[10px] font-black tracking-[0.25em] uppercase">Prostory</span>
        </div>
        <div class="h-px w-16 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent"></div>
      </div>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 uppercase tracking-tighter">
        Galerie
      </h2>
      <p class="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Moderní prostory vybavené nejnovějšími technologiemi
      </p>
    </div>

    <!-- Masonry Grid -->
    <div
      :class="[
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] transition-all duration-700 delay-200',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div
        v-for="(image, index) in images"
        :key="image.src"
        :class="[
          'group relative overflow-hidden rounded-2xl cursor-pointer',
          image.span === 'tall' ? 'row-span-2' : '',
          image.span === 'wide' ? 'col-span-2' : ''
        ]"
        :style="{ transitionDelay: `${200 + index * 50}ms` }"
        @click="openLightbox(image, index)"
      >
        <!-- Image -->
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <!-- Zoom icon -->
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        <!-- Border effect -->
        <div class="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none"></div>
      </div>
    </div>

    <!-- Bottom accent -->
    <div
      :class="[
        'flex justify-center mt-12 transition-all duration-700 delay-600',
        mounted ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-gray-900/20"></div>
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-gray-900/20 to-transparent"></div>
        <div class="w-2 h-2 rounded-full bg-gray-900/20"></div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl flex items-center justify-center"
          @click.self="closeLightbox"
        >
          <!-- Close button -->
          <button
            @click="closeLightbox"
            class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-10"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Prev button -->
          <button
            @click="prevImage"
            class="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-gray-900/70 hover:bg-gray-900 flex items-center justify-center transition-colors duration-300 z-10"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next button -->
          <button
            @click="nextImage"
            class="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-gray-900/70 hover:bg-gray-900 flex items-center justify-center transition-colors duration-300 z-10"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image -->
          <div class="max-w-5xl max-h-[85vh] px-4">
            <img
              v-if="lightboxImage"
              :src="lightboxImage.src"
              :alt="lightboxImage.alt"
              class="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          <!-- Counter -->
          <div class="absolute bottom-8 left-0 right-0 text-center">
            <p class="text-white/50 text-xs">
              {{ lightboxIndex + 1 }} / {{ images.length }}
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
