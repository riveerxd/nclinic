<script setup lang="ts">
// ServicesSection - Display dental services with pricing

interface Service {
  name: string
  price: string
  note?: string
}

interface ServiceCategory {
  title: string
  services: Service[]
}

const categories: ServiceCategory[] = [
  {
    title: 'Záchovná stomatologie',
    services: [
      { name: 'Fotokompozitní výplň dle rozsahu', price: 'od 2200 Kč' },
      { name: 'Skloionomerní výplň 1 kapsle', price: 'od 1500 Kč' },
      { name: 'Provizorní výplň', price: 'od 500 Kč' }
    ]
  },
  {
    title: 'Endodoncie',
    services: [
      { name: 'Endodontické ošetření fáze dle počtu kanálků', price: 'od 950 Kč' },
      { name: 'Endodontické ošetření 2.fáze plnění (za kanálek)', price: 'od 1250 Kč' },
      { name: 'Reendodontické ošetření 1 kanálek', price: 'od 1250 Kč' }
    ]
  },
  {
    title: 'Protetika',
    services: [
      { name: 'Korunka metalokeramická', price: 'od 8500 Kč' },
      { name: 'Korunka celokeramická', price: 'od 10000 Kč' },
      { name: 'Provizorní korunka', price: 'od 1100 Kč' },
      { name: 'FRC čep a dostavba', price: 'od 2500 Kč' },
      { name: 'Otisk alginát', price: 'od 600 Kč' },
      { name: 'Otisk C silikon', price: 'od 750 Kč' },
      { name: 'Cementace na definitivní cement', price: 'od 650 Kč' },
      { name: 'Cementace na provizorní cement', price: 'od 400 Kč' }
    ]
  },
  {
    title: 'Chirurgie',
    services: [
      { name: 'Anestezie (mimo ZP)', price: 'od 220 Kč' },
      { name: 'Komplikovaná extrakce', price: 'od 1500 Kč' },
      { name: 'Chirurgická extrakce', price: 'od 2500 Kč' },
      { name: 'Šití', price: 'od 450 Kč' }
    ]
  },
  {
    title: 'Ceník dentální hygieny 2024',
    services: [
      { name: 'Vstupní dentální hygiena pro děti od 16 a pro dospělé', price: '1990 Kč', note: '1h' },
      { name: 'Vstupní dentální hygiena pro děti 6-16 let', price: '1190 Kč', note: '30 min' },
      { name: 'Vstupní dentální hygiena pro děti 0-6 let', price: '990 Kč', note: '30 min' },
      { name: 'Pravidelná dentální hygiena (recall) pro děti od 16 let a dospělé', price: '1490 Kč', note: '30 min' },
      { name: 'Pravidelná dentální (recall) pro děti 6-16 let', price: '1090 Kč', note: '30 min' },
      { name: 'Pravidelná dentální hygiena (recall) pro děti 0-6 let', price: '790 Kč', note: '30 min' },
      { name: 'Deep scaling, hloubkové čištění parodontálních chobotů', price: '200 Kč za 1 zub / 1 kvadrant 1400 Kč', note: '45min' }
    ]
  }
]
</script>

<template>
  <section id="sluzby" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black mb-4 text-gray-900 uppercase tracking-tight">
        Naše služby
      </h2>
      <p class="text-xl text-gray-700 font-medium">Komplexní péče o vaše zdraví s moderním vybavením a zkušenými odborníky</p>
    </div>

    <!-- Service Categories -->
    <div class="space-y-12">
      <div v-for="category in categories" :key="category.title" class="relative group">
        <!-- Main card -->
        <div class="relative backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500">
          <!-- Category Header -->
          <div class="mb-8">
            <h3 class="text-3xl font-black text-gray-900 uppercase tracking-wide">
              {{ category.title }}
            </h3>
          </div>

          <!-- Services Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="service in category.services" :key="service.name"
                 class="relative group/item overflow-hidden">
              <!-- Item card -->
              <div class="relative backdrop-blur-xl bg-white/50 border-2 border-white/50 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-bold text-gray-900 flex-1 pr-4">{{ service.name }}</h4>
                  <!-- Special handling for long prices -->
                  <div v-if="service.price.includes('/')" class="text-right">
                    <div v-for="(pricePart, index) in service.price.split(' / ')" :key="index" class="text-base font-black text-gray-900">
                      {{ pricePart }}
                    </div>
                  </div>
                  <span v-else class="text-xl font-black text-gray-900 whitespace-nowrap">{{ service.price }}</span>
                </div>
                <p v-if="service.note" class="text-sm text-gray-700 font-medium italic mt-2">{{ service.note }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

