<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, default: '/ashar-techworks-monogram-logo.png' },        // put your file in /public
  label: { type: String, default: 'Designed & developed by Ashar Techworks' },
  href: { type: String, default: 'https://www.facebook.com/profile.php?id=61595204103837' },                     // optional: your portfolio / LinkedIn
  initials: { type: String, default: 'AT' },               // shown if the image is missing
})

const failed = ref(false)
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href || undefined"
    :target="href ? '_blank' : undefined"
    rel="noopener"
    class="group fixed bottom-5 left-5 z-[60] flex animate-float-slow items-center"
  >
    <!-- monogram -->
    <span
      class="relative grid h-[100px] w-[100px] place-items-center overflow-hidden rounded-full border border-white/60 bg-white/80 shadow-xl shadow-black/20 ring-1 ring-black/10 backdrop-blur transition duration-300 group-hover:scale-110"
    >
      <img
        v-if="!failed"
        :src="src"
        alt="Monogram"
        class="h-full w-full object-contain"
        @error="failed = true"
      />
      <span v-else class="font-display text-lg font-extrabold">{{ initials }}</span>
    </span>

    <!-- copyright label, slides out on hover -->
    <span
      class="pointer-events-none ml-2 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-ink text-xs font-medium text-sand opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:px-4 group-hover:py-2 group-hover:opacity-100"
    >
      © {{ new Date().getFullYear() }} · {{ label }}
    </span>
  </component>
</template>