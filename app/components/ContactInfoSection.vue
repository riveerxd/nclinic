<script setup lang="ts">
// ContactInfoSection - Displays contact information cards and news
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-6">
        <h3 class="text-2xl font-black mb-6 text-gray-900 uppercase tracking-wide">
          Kontaktní informace
        </h3>

        <!-- Phone Card -->
        <a href="tel:+420241740815" class="block backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 group">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wide">Telefon</h4>
              <p class="text-gray-900 font-bold">+420 703 622 644</p>
            </div>
          </div>
        </a>

        <!-- Email Card -->
        <a href="mailto:sestra@clinicm.cz" class="block backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 group">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wide">Email</h4>
              <p class="text-gray-900 font-bold">sestra@nclinic.cz</p>
            </div>
          </div>
        </a>
      </div>

      <!-- News/Updates -->
      <div class="space-y-6">
        <h3 class="text-2xl font-black mb-6 text-gray-900 uppercase tracking-wide">
          Aktuality
        </h3>

        <div class="backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl p-6 shadow-xl">
          <div class="flex items-start space-x-3 mb-3">
            <span class="bg-gray-900 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wide">NOVÉ</span>
            <span class="text-sm text-gray-700 font-bold">30. 9. 2025</span>
          </div>
          <h4 class="text-xl font-black text-gray-900 mb-2">Příjímáme nové pacienty</h4>
          <p class="text-gray-800 font-medium">Naše ordinace má volnou kapacitu pro nové pacienty. Objednejte se telefonicky nebo emailem.</p>
        </div>
      </div>
    </div>
  </section>
</template>

