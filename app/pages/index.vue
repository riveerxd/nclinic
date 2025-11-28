<script setup lang="ts">
// Main page - NClinic website with futuristic hero
const slogan = 'Moderní péče o váš úsměv, špičkové technologie a lidský přístup.'

// Define OG Image using custom template
defineOgImageComponent('OgImageTemplate', {
  subtitle: 'Moderni pece o vas usmev, spickove technologie a lidsky pristup'
})
</script>

<template>
  <div>
    <HeroSection :slogan="slogan" clinic-name="NClinic" />
    <OpeningHoursSection />
    <ContactInfoSection />
    <TeamSection />
    <ServicesSection />
    <Footer />
  </div>
</template> 