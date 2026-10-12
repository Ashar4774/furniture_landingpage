<script setup>
// Full class strings are used so Tailwind can detect them.
const items = [
  {
    id: 1, tag: 'Signature', name: 'Aurora Frame', desc: 'Solid oak, floating design, hidden LED glow.', price: 899,
    span: 'md:col-span-2 md:row-span-2', theme: 'bg-stone-800 text-white', big: true,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=70',
  },
  { id: 2, tag: 'Mattress', name: 'CloudRest Hybrid', desc: 'Memory foam + cooling gel.', price: 499, span: 'md:col-span-2', theme: 'bg-lime text-ink' },
  { id: 3, tag: 'Mattress', name: 'OrthoPro', desc: 'Firm spine support.', price: 569, span: '', theme: 'bg-ink text-sand' },
  { id: 4, tag: 'Bed', name: 'Nordic', desc: 'Upholstered, tool-free assembly.', price: 749, span: '', theme: 'bg-white text-ink' },
  { id: 5, tag: 'Bed', name: 'Storage Divan', desc: 'Hydraulic lift, 400L of space.', price: 649, span: 'md:col-span-2', theme: 'bg-clay text-ink' },
  { id: 6, tag: 'Bundle', name: 'Bed + Mattress Set', desc: 'Pick any frame and mattress together.', price: null, span: 'md:col-span-2', theme: 'bg-gradient-to-br from-orange-400 to-rose-500 text-white', promo: 'Save 20%' },
]
</script>

<template>
  <section id="collection" class="px-4 py-24 sm:px-8">
    <div class="mx-auto max-w-6xl">
      <div v-reveal class="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 class="text-4xl font-extrabold leading-none sm:text-6xl">
          The<br />collection<span class="text-lime-dark">.</span>
        </h2>
        <p class="max-w-xs text-ink/60">Frames and mattresses designed to work together — or perfect on their own.</p>
      </div>

      <!-- bento grid -->
      <div class="grid auto-rows-[230px] gap-4 md:grid-cols-4">
        <article
          v-for="(p, i) in items"
          :key="p.id"
          v-reveal="i * 80"
          :class="['group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6', p.span, p.theme]"
        >
          <!-- image card -->
          <template v-if="p.image">
            <img :src="p.image" alt="" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </template>

          <!-- decorative blob -->
          <div v-else class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition duration-700 group-hover:scale-150"></div>

          <div class="relative flex items-start justify-between">
            <span class="rounded-full border border-current/30 px-3 py-1 text-xs font-semibold backdrop-blur">{{ p.tag }}</span>
            <span
              class="grid h-10 w-10 place-items-center rounded-full bg-white text-ink transition duration-300 group-hover:rotate-45"
            >↗</span>
          </div>

          <div class="relative">
            <span v-if="p.promo" class="mb-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-600">{{ p.promo }}</span>
            <h3 :class="p.big ? 'text-4xl sm:text-5xl' : 'text-2xl'" class="font-extrabold leading-none">{{ p.name }}</h3>
            <p class="mt-2 max-w-xs text-sm opacity-70">{{ p.desc }}</p>
            <p v-if="p.price" class="mt-3 font-display text-lg font-bold">
              <span class="text-xs font-medium opacity-60">from</span> £{{ p.price }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>