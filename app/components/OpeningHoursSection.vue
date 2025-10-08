<script setup lang="ts">
// OpeningHoursSection - Clean design with opening hours and map

interface OpeningHours {
  day: string;
  hours: string;
}

const openingHours: OpeningHours[] = [
  { day: "Pondělí – Pátek", hours: "8:00 – 12:00 | 12:30 – 16:00" },
  { day: "Sobota – Neděle", hours: "Zavřeno" },
];
</script>

<template>
  <section
    id="opening-clinic"
    class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
  >
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black mb-4 text-gray-900 uppercase tracking-tight">
        Ordinační hodiny
      </h2>
      <p class="text-xl font-bold text-gray-700 tracking-wide">
        Zárubova 498/31, Praha 4
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 items-stretch">
      <!-- Left: Map -->
      <div class="relative group h-full">
        <div
          class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-2xl overflow-hidden h-full"
        >
          <div style="width: 100%">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Z%C3%A1rubova%20498/31+(NClinic)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ><a
                href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/"
                >mappa della popolazione Italia</a
              ></iframe
            >
          </div>
        </div>
      </div>

      <!-- Right: Opening Hours -->
      <div class="flex flex-col gap-6 h-full">
        <!-- Opening Hours Card -->
        <div class="relative group flex-1">
          <div
            class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-2xl p-8 h-full flex flex-col hover:scale-105 hover:-translate-y-1 transition-all duration-500"
          >
            <h3 class="text-2xl font-black text-gray-900 mb-6 flex items-center uppercase tracking-wide">
              <svg
                class="w-7 h-7 mr-3 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
              Otevírací doba
            </h3>

            <div class="space-y-4">
              <div
                v-for="schedule in openingHours"
                :key="schedule.day"
                class="flex items-center justify-between p-4 rounded-xl backdrop-blur-xl bg-white/50 border-2 border-white/50 hover:shadow-xl transition-all"
              >
                <span class="font-black text-gray-900 uppercase text-sm tracking-wide">{{
                  schedule.day
                }}</span>
                <span class="text-gray-900 font-bold">{{
                  schedule.hours
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Address & Contact Card -->
        <div class="relative group flex-1">
          <div
            class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-2xl p-8 h-full flex flex-col hover:scale-105 hover:-translate-y-1 transition-all duration-500"
          >
            <h3 class="text-2xl font-black text-gray-900 mb-6 flex items-center uppercase tracking-wide">
              <svg
                class="w-7 h-7 mr-3 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              Adresa
            </h3>

            <div class="space-y-6 flex-1">
              <!-- Address Section -->
              <div class="space-y-2">
                <h4 class="text-xs font-black text-gray-900 uppercase tracking-wide">Adresa</h4>
                <div class="space-y-1 text-gray-900">
                  <p class="text-lg font-bold">Zárubova 498/31</p>
                  <p class="text-lg font-bold">142 00 Praha 4</p>
                  <p class="text-lg font-bold">Česká republika</p>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

