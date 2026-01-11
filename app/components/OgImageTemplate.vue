<script setup lang="ts">
defineProps<{
  subtitle?: string
}>()
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
    style="font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);"
  >
    <!-- Background decorative elements using radial gradients (Satori compatible) -->
    <div style="position: absolute; top: -25%; left: 5%; width: 380px; height: 380px; background: radial-gradient(circle, rgba(14, 165, 233, 0.28) 0%, rgba(14, 165, 233, 0) 70%);" />
    <div style="position: absolute; top: 8%; right: -15%; width: 320px; height: 320px; background: radial-gradient(circle, rgba(14, 165, 233, 0.32) 0%, rgba(14, 165, 233, 0) 70%);" />
    <div style="position: absolute; bottom: -10%; left: 18%; width: 280px; height: 280px; background: radial-gradient(circle, rgba(14, 165, 233, 0.24) 0%, rgba(14, 165, 233, 0) 70%);" />
    <div style="position: absolute; bottom: 5%; right: 8%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%);" />
    <div style="position: absolute; top: 55%; left: -18%; width: 420px; height: 420px; background: radial-gradient(circle, rgba(14, 165, 233, 0.26) 0%, rgba(14, 165, 233, 0) 70%);" />
    <div style="position: absolute; top: -8%; right: 25%; width: 240px; height: 240px; background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(14, 165, 233, 0) 70%);" />

    <!-- Content -->
    <div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 80px;">
      <!-- Main title -->
      <div style="font-size: 72px; font-weight: 700; color: #1e293b; line-height: 1.1; margin-bottom: 24px;">
        <span style="color: #0EA5E9;">N</span>Clinic
      </div>

      <!-- Subtitle -->
      <div style="font-size: 32px; font-weight: 500; color: #475569; margin-bottom: 20px;">
        Zubni klinika Praha 4
      </div>

      <!-- Description -->
      <div style="font-size: 24px; font-weight: 400; color: #64748b; max-width: 700px; line-height: 1.4;">
        {{ subtitle || 'Moderni pece o vas usmev, spickove technologie a lidsky pristup' }}
      </div>
    </div>

    <!-- Bottom accent line -->
    <div
      style="position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #0EA5E9 0%, #0284C7 100%);"
    />
  </div>
</template>
