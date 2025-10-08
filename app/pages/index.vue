<script setup lang="ts">
// Main page - NClinic website with futuristic hero
const slogan = 'Moderní péče o váš úsměv, špičkové technologie a lidský přístup.'
</script>

<template>
  <div>
    <HeroSection :slogan="slogan" clinic-name="NClinic" />
    <OpeningHoursSection />
    <ContactInfoSection />
    <!--
    <TeamSection />
    -->
    <ServicesSection />
    <Footer />
  </div>
</template> 