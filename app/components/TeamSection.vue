<script setup lang="ts">
// TeamSection - Displays team members with profiles and stats

interface TeamMember {
  name: string
  role: string
  badge: string
  badgeColor: string
  stats: { value: string; label: string }[]
}

const team: TeamMember[] = [
  {
    name: 'MUDr. Jamal Karra DDS, MS, CSc.',
    role: 'ústní, čelistní a obličejová chirurgie',
    badge: 'Lékař',
    badgeColor: 'bg-green-600',
    stats: [
      { value: '15+', label: 'LET PRAXE' },
      { value: '5000+', label: 'OPERACÍ' }
    ]
  }
]
</script>

<template>
  <section id="lekari" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black mb-4 text-gray-900 uppercase tracking-tight">
        Náš tým
      </h2>
      <p class="text-xl text-gray-700 font-medium">Odborník s dlouholetými zkušenostmi v oboru</p>
    </div>

    <!-- Team Grid -->
    <div class="flex justify-center mb-20">
      <div class="w-full max-w-md">
      <div v-for="member in team" :key="member.name" class="backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500">
        <!-- Badge -->
        <div class="flex justify-center pt-8 pb-4">
          <span class="bg-gray-900 text-white text-xs font-black px-6 py-3 rounded-full uppercase tracking-wide">
            {{ member.badge }}
          </span>
        </div>

        <!-- Profile Image Placeholder -->
        <div class="flex justify-center mb-6">
          <div class="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center">
            <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>

        <!-- Name & Role -->
        <div class="text-center px-6 pb-6">
          <h3 class="text-2xl font-black text-gray-900 mb-2 uppercase tracking-wide">{{ member.name }}</h3>
          <p class="text-gray-700 font-bold mb-6">{{ member.role }}</p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in member.stats" :key="stat.label" class="text-center">
              <div class="text-3xl font-black text-gray-900">{{ stat.value }}</div>
              <div class="text-xs text-gray-700 font-bold uppercase tracking-wide mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    </section>
</template>

