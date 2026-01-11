<script setup lang="ts">
// HeroSection - ULTIMATE Premium Brutalist Design
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
  }, 100)
})

// Google Ads conversion tracking
const trackConversion = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    return window.gtag_report_conversion(url)
  }
  return true
}
</script>

<template>
  <section id="hero" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
    
    <!-- Subtle geometric background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 36px);"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center space-y-16">

        <!-- Main Title with ULTIMATE Premium Effect -->
        <div :class="['transition-all duration-1000 ease-out', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          
          <!-- Premium accent line with badge -->
          <div class="flex items-center justify-center mb-12">
            <div class="h-px w-20 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
            <div class="mx-4 px-8 py-3 border-2 border-white/50 rounded-full backdrop-blur-xl bg-white/30 shadow-lg">
              <span class="text-gray-900 text-xs font-black tracking-[0.3em] uppercase">Excelence v Péči</span>
            </div>
            <div class="h-px w-20 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
          </div>

          <!-- ULTIMATE heading - Clean, Bold, Professional -->
          <h1 class="relative inline-block mb-10">
            <div class="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter flex items-baseline justify-center leading-none">
              <!-- Ultra N with brutalist box -->
              <span class="relative inline-block transform hover:scale-105 transition-all duration-700 group">
                <span class="relative z-10 text-[1.4em] text-gray-900 drop-shadow-2xl animate-subtle-pulse">N</span>
                <!-- Premium border frame around N -->
                <div class="absolute -inset-4 border-4 border-gray-900/10 backdrop-blur-sm bg-white/20 rounded-xl transform rotate-3 group-hover:rotate-6 transition-all duration-700"></div>
                <div class="absolute -inset-3 border-2 border-white/50 backdrop-blur-sm rounded-xl transform -rotate-2 group-hover:-rotate-4 transition-all duration-700"></div>
              </span>
              <!-- Clinic text - Ultra clean -->
              <span class="text-gray-900 drop-shadow-xl animate-fade-in">Clinic</span>
            </div>
          </h1>

          <!-- Slogan with glassmorphism container -->
          <div class="max-w-4xl mx-auto backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-3xl p-8 shadow-2xl">
            <p class="text-xl md:text-2xl lg:text-3xl text-gray-800 font-light tracking-wide leading-relaxed">
              {{ slogan }}
            </p>
          </div>
        </div>

        <!-- Premium CTA Buttons -->
        <div :class="['flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-300', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">

          <!-- Primary CTA - Black brutalist -->
          <a href="tel:+420703622644" @click.prevent="trackConversion('tel:+420703622644')" class="group relative px-12 py-6 bg-gray-900 border-4 border-gray-900 rounded-2xl font-black text-lg text-white overflow-hidden hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 inline-block">
            <span class="relative z-10 flex items-center gap-3 tracking-wide">
              <svg class="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              ZAVOLAT
            </span>
            <!-- Hover effect -->
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </a>

          <!-- Secondary CTA - White brutalist glass -->
          <a href="mailto:sestra@nclinic.cz?subject=Objednání%20do%20NClinic&body=Dobrý%20den,%0A%0Arád(a)%20bych%20se%20objednal(a)%20na%20vyšetření.%0A%0AJméno:%0ATelefon:%0APožadovaný%20termín:%0A%0ADěkuji" @click.prevent="trackConversion('mailto:sestra@nclinic.cz?subject=Objednání%20do%20NClinic&body=Dobrý%20den,%0A%0Arád(a)%20bych%20se%20objednal(a)%20na%20vyšetření.%0A%0AJméno:%0ATelefon:%0APožadovaný%20termín:%0A%0ADěkuji')" class="group relative px-12 py-6 backdrop-blur-xl bg-white/50 border-4 border-white/50 rounded-2xl font-black text-lg text-gray-900 hover:bg-white/70 hover:border-white/70 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 inline-block">
            <span class="relative z-10 flex items-center gap-3 tracking-wide">
              <svg class="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              E-MAIL
            </span>
          </a>
        </div>

        <!-- Premium Feature Badges -->
        <div :class="['flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-500', mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
          
          <!-- Badge 1 -->
          <div class="group backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl px-8 py-4 flex items-center space-x-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div class="relative">
              <div class="w-3 h-3 bg-gray-900 rounded-full animate-pulse shadow-lg"></div>
              <div class="absolute inset-0 w-3 h-3 bg-gray-900 rounded-full animate-ping"></div>
            </div>
            <span class="text-gray-900 text-sm font-bold tracking-wide uppercase">Certifikovaní specialisté</span>
          </div>
          
          <!-- Badge 2 -->
          <div class="group backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl px-8 py-4 flex items-center space-x-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div class="relative">
              <div class="w-3 h-3 bg-gray-900 rounded-full animate-pulse delay-300 shadow-lg"></div>
              <div class="absolute inset-0 w-3 h-3 bg-gray-900 rounded-full animate-ping delay-300"></div>
            </div>
            <span class="text-gray-900 text-sm font-bold tracking-wide uppercase">Nejmodernější technologie</span>
          </div>

          <!-- Badge 3 -->
          <div class="group backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl px-8 py-4 flex items-center space-x-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div class="relative">
              <div class="w-3 h-3 bg-gray-900 rounded-full animate-pulse delay-500 shadow-lg"></div>
              <div class="absolute inset-0 w-3 h-3 bg-gray-900 rounded-full animate-ping delay-500"></div>
            </div>
            <span class="text-gray-900 text-sm font-bold tracking-wide uppercase">Důvěra & Excellence</span>
          </div>
        </div>


      </div>
    </div>

    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 border-4 border-gray-900/5 rounded-3xl backdrop-blur-sm bg-white/10 rotate-12 animate-float-slow"></div>
    <div class="absolute bottom-32 right-20 w-24 h-24 border-4 border-gray-900/5 rounded-2xl backdrop-blur-sm bg-white/10 -rotate-12 animate-float-slow-reverse"></div>
    <div class="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-gray-900/5 rounded-xl backdrop-blur-sm bg-white/10 rotate-45 animate-float-slow delay-1000"></div>
  </section>
</template>

<style scoped>
/* Subtle pulse animation for the N letter */
@keyframes subtle-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.animate-subtle-pulse {
  animation: subtle-pulse 4s ease-in-out infinite;
}

/* Smooth fade in animation */
@keyframes fade-in {
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
}

.animate-fade-in {
  animation: fade-in 3s ease-in-out infinite;
}

/* Slow floating animation for decorative elements */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(12deg);
  }
  50% {
    transform: translateY(-20px) translateX(10px) rotate(15deg);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

/* Reverse floating animation */
@keyframes float-slow-reverse {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(-12deg);
  }
  50% {
    transform: translateY(20px) translateX(-10px) rotate(-15deg);
  }
}

.animate-float-slow-reverse {
  animation: float-slow-reverse 10s ease-in-out infinite;
}

/* Animation delays */
.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-700 {
  animation-delay: 700ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

/* Premium hover effects */
button {
  will-change: transform, shadow;
}

.group:hover {
  will-change: transform;
}
</style>
