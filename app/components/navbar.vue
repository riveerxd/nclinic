<template>
  <!-- Premium Translucent Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg"
  >
    <div class="max-w-7xl lg:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a @click="smoothScrollTo('hero')" class="flex items-center space-x-1 cursor-pointer group">
              <!-- Tooth Icon -->
              <svg class="w-10 h-10 text-gray-900 transform group-hover:scale-110 transition-transform" viewBox="0 0 2200 2200" fill="currentColor" stroke="currentColor" stroke-width="80" xmlns="http://www.w3.org/2000/svg">
<g id="Objects">
	<g>
		<path d="M1639.451,393.388c-14.825-12.508-31.454-22.549-48.878-30.98
			c-38.517-18.637-81.745-32.553-124.729-34.914c-52.231-4.017-105.073,3.48-154.912,17.876c-14.302,4.099-29.797,9.594-43.5,15.384
			c-55.985,23.361-106.229,58.115-160.309,85.272c-5.854-2.564-11.675-5.211-17.445-7.982
			c-53.777-25.311-104.375-58.957-160.329-80.539c-5.052-2.047-11.107-4.003-16.269-5.97c-8.121-2.691-19.333-6.288-27.734-8.385
			c-30.38-8.919-62.438-12.834-93.852-15.875c-68.533-6.635-142.388,11.317-201.316,46.287
			c-17.752,10.535-33.939,23.619-48.059,38.642c-41.575,44.417-65.189,103.639-71.804,163.688
			c-3.791,35.373-1.363,71.719,4.911,106.674c26.196,146.252,121.458,266.715,171.262,402.309
			c7.87,21.693,15.416,45.413,22.257,67.315c42.62,138.43,46.793,287.921,58.974,430.114c3.916,45.71,7.939,91.441,19.005,136.196
			c9.13,37.134,22.342,74.498,45.906,105.675c27.397,36.247,76.313,61.878,121.573,44.172c21.56-7.824,32.818-25.327,36.35-46.19
			c6.907-40.801-2.648-78.828-7.089-116.963c-4.241-36.421-8.458-76.135-5.021-111.746c5.883-60.939,20.261-122.11,44.986-177.893
			c5.429-11.985,12.486-23.006,20.961-32.662c25.348-29.214,64.595-44.696,103.054-42.588
			c48.339,1.895,92.749,32.175,111.617,76.795c36.014,82.079,50.043,140.249,41.625,257.655
			c-3.41,47.567-29.688,133.668,5.495,178.426c13.845,17.613,38.756,20.724,59.724,19.048c40.328-3.223,71.504-30.82,91.272-64.265
			c19.543-32.75,30.284-69.769,37.936-106.53c7.642-37.036,11.168-75.588,14.482-113.158
			c15.794-179.074,21.133-360.576,92.659-528.565c49.753-119.917,130.346-229.073,159.51-359.269
			C1745.842,592.958,1727.689,467.835,1639.451,393.388z M1666.877,720.532c-37.924,124.372-118.135,230.554-160.619,353.526
			c-19.786,57.272-37.36,115.671-47.445,175.516c-19.26,102.976-23.163,208.581-31.897,312.707
			c-2.393,28.179-4.841,59.677-8.601,87.561c-6.28,43.131-15.774,87.019-35.924,125.644c-7.823,14.847-18.136,29.523-31.396,39.809
			c-15.601,11.918-50.28,22.931-59.637-0.919c-4.669-11.701-6.538-25.69-7.105-38.908c-0.702-25.449,2.685-51.326,5.102-76.718
			c2.76-30.365,3.386-60.863,1.855-91.237c-2.644-52.983-10.257-106.138-24.466-157.355c-2.921-10.697-6.598-22.513-10.3-32.977
			c-2.832-7.555-5.062-14.38-8.472-22.073c-20.239-46.913-63.301-81.599-113.335-91.816
			c-77.108-16.407-156.188,23.914-185.01,97.915c-2.404,6.308-4.727,12.696-7.085,19.048
			c-18.754,55.013-28.953,112.917-33.037,170.814c-2.551,35.991-1.601,72.454,2.318,108.34c3.528,33.854,7.763,66.398,3.95,100.484
			c-1.276,11.402-5.538,24.256-20.403,26.923c-34.216,6.126-54.161-15.687-70.597-44.238
			c-30.306-54.807-38.596-120.375-44.282-182.572c-5.491-58.008-9.247-119.325-14.101-177.56
			c-8.945-107.318-23.369-215.3-58.862-317.48c-5.047-14.529-11.591-34.018-17.126-48.383
			c-39.665-104.378-104.601-197.251-143.85-301.403c-11.826-31.299-21.321-63.993-26.424-97.08
			c-0.421-2.643-1.042-7.699-1.487-10.365c-0.54-4.042-1.107-11.224-1.624-15.571c-0.261-5.707-1.079-15.227-0.952-20.761
			c-1.846-76.539,29.582-159.571,96.099-201.329c64.133-38.011,137.141-51.336,210.207-44.242
			c39.977,3.882,79.456,13.323,116.876,27.911c51.884,19.924,100.613,47.84,153.018,66.888
			c52.738,19.864,108.931,31.07,165.03,34.139c1.312,0.067,2.51-0.86,2.727-2.186c0.233-1.424-0.732-2.767-2.156-3.001
			c-47.616-7.68-94.221-20.186-138.649-38.414c22.341-8.05,44.611-17.544,66.205-27.188c30.679-13.603,60.411-27.261,91.646-37.359
			c13.168-4.396,27.941-8.435,41.521-11.344c48.654-10.411,99.488-14.996,148.565-8.167c40.164,6.185,77.255,19.958,113.284,38.585
			C1692.445,466.341,1698.935,612.694,1666.877,720.532z"/>
	</g>
</g>
</svg>

              <!-- NClinic Text -->
              <div class="flex items-baseline">
                <span class="text-2xl font-black text-gray-900">N</span>
                <span class="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">Clinic</span>
              </div>
            </a>
          </div>

                    <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a
                @click="smoothScrollTo('hero')"
                class="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
                >Domů</a
              >
              <a
                @click="smoothScrollTo('opening-clinic')"
                class="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
                >Klinika</a
              >
              <a
                @click="smoothScrollTo('our-team')"
                class="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
                >Lékaři</a
              >
              <a
                @click="smoothScrollTo('services')"
                class="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
                >Služby</a
              >
              <a
                @click="smoothScrollTo('footer')"
                class="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
                >Kontakt</a
              >
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white/30 focus:outline-none transition-all duration-300"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Hamburger icon with morphing animation -->
              <div class="relative w-6 h-6 flex items-center justify-center">
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
                ></span>
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
                ></span>
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden overflow-hidden">
          <div
            class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-white/30"
          >
          <a
            @click="smoothScrollTo('hero')"
            class="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
            >Domů</a
          >            
          <a
            @click="smoothScrollTo('opening-clinic')"
            class="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
            >Klinika</a
          >
          
          <a
            @click="smoothScrollTo('our-team')"
            class="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
            >Lékaři</a
          >
          <a
            @click="smoothScrollTo('services')"
            class="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
            >Služby</a
          >
          <a
            @click="smoothScrollTo('footer')"
            class="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-white/30 rounded-lg cursor-pointer"
            >Kontakt</a
          >
          </div>
        </div>
      </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

// Smooth scroll function
const smoothScrollTo = (sectionId) => {
  // Close mobile menu if open
  isMobileMenuOpen.value = false;
  
  // Find the target section
  const targetSection = document.getElementById(sectionId);
  
  if (targetSection) {
    // Get navbar height for offset (adjust this value based on your navbar height)
    const navbarHeight = 80; // Approximate navbar height in pixels
    
    // Get the splitter element within the section (usually the first decorative element)
    const splitter = targetSection.querySelector('.inline-flex.items-center.space-x-4') || targetSection;
    
    // Calculate position with offset
    const elementPosition = splitter.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    // Premium smooth scroll with longer duration
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for premium feel
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smooth, premium feel
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  }
};
</script>
