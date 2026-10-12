<script setup>
import HeroSection from './components/HeroSection.vue'
import ProductsSection from './components/ProductSection.vue'
// import SleepFinder from './components/SleepFinder.vue'
import ContactSection from './components/ContactSection.vue'
import Monogram from './components/monogram.vue'

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'Sleep Finder', href: '#finder' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <!-- floating pill navbar -->
  <header class="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
    <div class="flex items-center justify-between rounded-full border border-white/40 bg-sand/70 py-2 pl-6 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl">
      <a href="#home" class="font-display text-xl font-extrabold">Sample <span class="text-lime-dark">Co.</span></a>
      <nav class="hidden gap-7 text-sm font-medium md:flex">
        <a v-for="l in links" :key="l.href" :href="l.href" class="transition hover:opacity-60">{{ l.label }}</a>
      </nav>
      <a href="#contact" class="btn btn-dark !px-5 !py-2.5">Get quote</a>
    </div>
  </header>

  <main>
    <HeroSection />
    <ProductsSection />
    <!-- <SleepFinder /> -->
    <ContactSection />
    <Monogram />
  </main>

  <footer class="overflow-hidden px-6 pb-6 pt-16">
    <p class="select-none text-center font-display text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-ink/10">
      Furniture
    </p>
    <p class="mt-6 text-center text-sm text-ink/50">
      © {{ new Date().getFullYear() }} Furniture Co.
    </p>
  </footer>
</template>