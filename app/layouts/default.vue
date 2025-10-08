<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Premium Marine Blue Background Design -->
    <div class="fixed inset-0 z-0">
      <!-- Base marine gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>

      <!-- Large blurry circles with marine blue theme -->
      <div class="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute top-32 right-20 w-[450px] h-[450px] bg-sky-400/25 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div class="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      <div class="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-blue-500/25 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
      <div class="absolute bottom-40 right-10 w-[380px] h-[380px] bg-sky-500/20 rounded-full blur-3xl animate-pulse-slow delay-300"></div>
      <div class="absolute top-1/4 left-1/2 w-[420px] h-[420px] bg-cyan-400/25 rounded-full blur-3xl animate-pulse-slow delay-1200"></div>

      <!-- Subtle overlay for professional look -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white/60 via-blue-50/40 to-sky-50/50"></div>

      <!-- Very subtle dots pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
    </div>

    <!-- Content wrapper with backdrop blur -->
    <div class="relative z-10">
      <!-- Navbar component -->
      <Navbar />
      
      <!-- Main content area with slot for page content -->
      <main class="pt-8">
        <slot />
      </main>







    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
</script>

<style scoped>
/* Slow breathing pulse animation for marine background */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

/* Custom animation delays for staggered pulsing */
.delay-1000 {
  animation-delay: 1s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-1200 {
  animation-delay: 1.2s;
}

.delay-800 {
  animation-delay: 0.8s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}

.delay-900 {
  animation-delay: 0.9s;
}

.delay-1100 {
  animation-delay: 1.1s;
}
</style> 