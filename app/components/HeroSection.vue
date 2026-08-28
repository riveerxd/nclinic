<script setup lang="ts">
// HeroSection - Clean, confident, no bullshit
import { ref, onMounted } from 'vue'

export interface HeroSectionProps {
  clinicName?: string
  slogan: string
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  clinicName: 'NClinic'
})

const mounted = ref(false)
onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 50)
})

// Contact tracking. Phone and e-mail are reported as separate GA4 events while
// still firing the shared Google Ads conversion. Falls back to plain navigation
// if the tag is blocked, so the link never breaks. The busy flag is there because
// the tracker does the navigating: a second click while one is in flight would
// double count and race the redirect.
const contactBusy = ref(false)

const trackContact = (kind: 'phone' | 'email', url: string) => {
  if (contactBusy.value) return false
  contactBusy.value = true
  setTimeout(() => { contactBusy.value = false }, 1000)
  const w = typeof window !== 'undefined' ? (window as any) : null
  if (w && typeof w.nclinic_track_contact === 'function') {
    return w.nclinic_track_contact(kind, url)
  }
  if (w) { w.location.href = url }
  return false
}
</script>

<template>
  <section id="hero" class="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pb-28">

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Center block -->
      <div class="text-center">

        <!-- Availability badge -->
        <div :class="['mb-8 transition-all duration-700', mounted ? 'opacity-100' : 'opacity-0']">
          <div class="inline-flex items-center gap-2 text-sm text-gray-600">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            Přijímáme nové pacienty
          </div>
        </div>

        <!-- Tooth + Clinic name -->
        <div
          :class="['flex items-center justify-center gap-3 mb-8 transition-all duration-700', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
        >
          <svg class="h-12 w-12 md:h-16 md:w-16 flex-shrink-0 text-gray-900" viewBox="0 0 2200 2200" fill="currentColor" stroke="currentColor" stroke-width="80" xmlns="http://www.w3.org/2000/svg">
            <path d="M1639.451,393.388c-14.825-12.508-31.454-22.549-48.878-30.98c-38.517-18.637-81.745-32.553-124.729-34.914c-52.231-4.017-105.073,3.48-154.912,17.876c-14.302,4.099-29.797,9.594-43.5,15.384c-55.985,23.361-106.229,58.115-160.309,85.272c-5.854-2.564-11.675-5.211-17.445-7.982c-53.777-25.311-104.375-58.957-160.329-80.539c-5.052-2.047-11.107-4.003-16.269-5.97c-8.121-2.691-19.333-6.288-27.734-8.385c-30.38-8.919-62.438-12.834-93.852-15.875c-68.533-6.635-142.388,11.317-201.316,46.287c-17.752,10.535-33.939,23.619-48.059,38.642c-41.575,44.417-65.189,103.639-71.804,163.688c-3.791,35.373-1.363,71.719,4.911,106.674c26.196,146.252,121.458,266.715,171.262,402.309c7.87,21.693,15.416,45.413,22.257,67.315c42.62,138.43,46.793,287.921,58.974,430.114c3.916,45.71,7.939,91.441,19.005,136.196c9.13,37.134,22.342,74.498,45.906,105.675c27.397,36.247,76.313,61.878,121.573,44.172c21.56-7.824,32.818-25.327,36.35-46.19c6.907-40.801-2.648-78.828-7.089-116.963c-4.241-36.421-8.458-76.135-5.021-111.746c5.883-60.939,20.261-122.11,44.986-177.893c5.429-11.985,12.486-23.006,20.961-32.662c25.348-29.214,64.595-44.696,103.054-42.588c48.339,1.895,92.749,32.175,111.617,76.795c36.014,82.079,50.043,140.249,41.625,257.655c-3.41,47.567-29.688,133.668,5.495,178.426c13.845,17.613,38.756,20.724,59.724,19.048c40.328-3.223,71.504-30.82,91.272-64.265c19.543-32.75,30.284-69.769,37.936-106.53c7.642-37.036,11.168-75.588,14.482-113.158c15.794-179.074,21.133-360.576,92.659-528.565c49.753-119.917,130.346-229.073,159.51-359.269C1745.842,592.958,1727.689,467.835,1639.451,393.388z M1666.877,720.532c-37.924,124.372-118.135,230.554-160.619,353.526c-19.786,57.272-37.36,115.671-47.445,175.516c-19.26,102.976-23.163,208.581-31.897,312.707c-2.393,28.179-4.841,59.677-8.601,87.561c-6.28,43.131-15.774,87.019-35.924,125.644c-7.823,14.847-18.136,29.523-31.396,39.809c-15.601,11.918-50.28,22.931-59.637-0.919c-4.669-11.701-6.538-25.69-7.105-38.908c-0.702-25.449,2.685-51.326,5.102-76.718c2.76-30.365,3.386-60.863,1.855-91.237c-2.644-52.983-10.257-106.138-24.466-157.355c-2.921-10.697-6.598-22.513-10.3-32.977c-2.832-7.555-5.062-14.38-8.472-22.073c-20.239-46.913-63.301-81.599-113.335-91.816c-77.108-16.407-156.188,23.914-185.01,97.915c-2.404,6.308-4.727,12.696-7.085,19.048c-18.754,55.013-28.953,112.917-33.037,170.814c-2.551,35.991-1.601,72.454,2.318,108.34c3.528,33.854,7.763,66.398,3.95,100.484c-1.276,11.402-5.538,24.256-20.403,26.923c-34.216,6.126-54.161-15.687-70.597-44.238c-30.306-54.807-38.596-120.375-44.282-182.572c-5.491-58.008-9.247-119.325-14.101-177.56c-8.945-107.318-23.369-215.3-58.862-317.48c-5.047-14.529-11.591-34.018-17.126-48.383c-39.665-104.378-104.601-197.251-143.85-301.403c-11.826-31.299-21.321-63.993-26.424-97.08c-0.421-2.643-1.042-7.699-1.487-10.365c-0.54-4.042-1.107-11.224-1.624-15.571c-0.261-5.707-1.079-15.227-0.952-20.761c-1.846-76.539,29.582-159.571,96.099-201.329c64.133-38.011,137.141-51.336,210.207-44.242c39.977,3.882,79.456,13.323,116.876,27.911c51.884,19.924,100.613,47.84,153.018,66.888c52.738,19.864,108.931,31.07,165.03,34.139c1.312,0.067,2.51-0.86,2.727-2.186c0.233-1.424-0.732-2.767-2.156-3.001c-47.616-7.68-94.221-20.186-138.649-38.414c22.341-8.05,44.611-17.544,66.205-27.188c30.679-13.603,60.411-27.261,91.646-37.359c13.168-4.396,27.941-8.435,41.521-11.344c48.654-10.411,99.488-14.996,148.565-8.167c40.164,6.185,77.255,19.958,113.284,38.585C1692.445,466.341,1698.935,612.694,1666.877,720.532z"/>
          </svg>
          <div class="flex items-baseline">
            <span class="text-5xl md:text-6xl font-black text-gray-900">N</span>
            <span class="text-4xl md:text-5xl font-bold text-gray-700">Clinic</span>
          </div>
        </div>

        <!-- Main heading -->
        <h1
          :class="['transition-all duration-1000 delay-100', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
        >
          <span class="block text-[11vw] md:text-[9vw] lg:text-[7vw] font-black text-gray-900 leading-[0.9] tracking-tighter">
            Zubní klinika
          </span>
          <span class="block text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-medium text-gray-400 leading-[1.1] tracking-tight mt-2">
            Praha 4 - Kamýk
          </span>
        </h1>

        <!-- Slogan -->
        <p
          :class="['mt-8 text-lg md:text-xl text-gray-600 font-light max-w-xl mx-auto transition-all duration-1000 delay-200', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
        >
          {{ slogan }}
        </p>

        <!-- Contact buttons -->
        <div
          :class="['mt-10 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
        >
          <a
            href="tel:+420703622644"
            @click.prevent="trackContact('phone', 'tel:+420703622644')"
            class="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +420 703 622 644
          </a>

          <a
            href="mailto:sestra@nclinic.cz?subject=Objednání%20do%20NClinic"
            @click.prevent="trackContact('email', 'mailto:sestra@nclinic.cz?subject=Objednání%20do%20NClinic')"
            class="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/60 backdrop-blur border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-white/80 transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            E-mail
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Clean */
</style>
