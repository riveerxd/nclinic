<script setup lang="ts">
// TeamSection - Premium Brutalist Team Display
import { ref, onMounted } from 'vue'

interface TeamMember {
  name: string
  role: string
  badge: string
  image: string
  imagePosition?: string
}

const team: TeamMember[] = [
  {
    name: 'MUDr. Jamal Karra DDS, MS, CSc.',
    role: 'ústní, čelistní a obličejový chirurg',
    badge: 'Lékař',
    image: '/images/dr-jamal-karra.jpg',
    imagePosition: 'center 15%'
  },
  {
    name: 'MDDr. Diana Issa',
    role: 'praktický stomatolog',
    badge: 'Lékařka',
    image: '/images/dr-diana-issa.jpg',
    imagePosition: 'center 10%'
  },
  {
    name: 'Lidiia Movchan',
    role: 'zdravotní sestra',
    badge: 'Sestra',
    image: '/images/assistant-lidiia-movchan.jpg',
    imagePosition: 'center 10%'
  },
  {
    name: 'Diana Buleha',
    role: 'zdravotnická asistentka',
    badge: 'Sestra',
    image: '/images/assistant-diana-buleha.jpg',
    imagePosition: 'center 10%'
  }
]

const mounted = ref(false)
onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})
</script>

<template>
  <section id="lekari" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          <span class="text-gray-900 text-[10px] font-black tracking-[0.25em] uppercase">Odborníci</span>
        </div>
        <div class="h-px w-16 bg-gradient-to-r from-transparent via-gray-900/30 to-transparent"></div>
      </div>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 uppercase tracking-tighter">
        Náš tým
      </h2>
      <p class="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Špičkoví odborníci s lidským přístupem a dlouholetou praxí
      </p>
    </div>

    <!-- Team Grid - Doctors row -->
    <div
      :class="[
        'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6 transition-all duration-700 delay-200',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div
        v-for="(member, index) in team.slice(0, 2)"
        :key="member.name"
        class="group"
        :style="{ transitionDelay: `${200 + index * 100}ms` }"
      >
        <div class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

          <!-- Square image container -->
          <div class="relative aspect-square overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              :style="{ objectPosition: member.imagePosition || 'center' }"
            />

            <!-- Subtle gradient overlay at bottom -->
            <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>

            <!-- Badge -->
            <div class="absolute top-4 left-4">
              <span class="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-md border border-white/50">
                {{ member.badge }}
              </span>
            </div>
          </div>

          <!-- Text content -->
          <div class="p-5">
            <h3 class="text-sm md:text-base font-black text-gray-900 uppercase tracking-tight leading-tight mb-1">
              {{ member.name }}
            </h3>
            <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Grid - Staff row -->
    <div
      :class="[
        'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-400',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div
        v-for="(member, index) in team.slice(2)"
        :key="member.name"
        class="group"
        :style="{ transitionDelay: `${400 + index * 100}ms` }"
      >
        <div class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

          <!-- Square image container -->
          <div class="relative aspect-square overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              :style="{ objectPosition: member.imagePosition || 'center' }"
            />

            <!-- Subtle gradient overlay at bottom -->
            <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>

            <!-- Badge -->
            <div class="absolute top-4 left-4">
              <span class="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-md border border-white/50">
                {{ member.badge }}
              </span>
            </div>
          </div>

          <!-- Text content -->
          <div class="p-5">
            <h3 class="text-sm md:text-base font-black text-gray-900 uppercase tracking-tight leading-tight mb-1">
              {{ member.name }}
            </h3>
            <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {{ member.role }}
            </p>
          </div>
        </div>
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
  </section>
</template>
