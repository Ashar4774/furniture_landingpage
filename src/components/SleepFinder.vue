<script setup>
import { ref, computed } from 'vue'
import { store } from '../store'

const positions = ['Side', 'Back', 'Stomach']
const position = ref('Side')
const firmness = ref(5)

const feel = computed(() => (firmness.value <= 3 ? 'Plush' : firmness.value <= 7 ? 'Balanced' : 'Firm'))
const pct = computed(() => ((firmness.value - 1) / 9) * 100)

const pick = computed(() => {
  if (position.value === 'Stomach' || firmness.value >= 8)
    return { name: 'OrthoPro Firm Support', price: 569, why: 'Keeps the spine neutral and hips from sinking.' }
  if (position.value === 'Side' && firmness.value <= 6)
    return { name: 'CloudRest Hybrid', price: 499, why: 'Contours around shoulders and hips to relieve pressure.' }
  return { name: 'Luxe Pocket Spring', price: 679, why: 'Responsive springs with balanced, even support.' }
})

// layer heights in px: softer = thicker comfort layer
const layers = computed(() => [
  { label: 'Cooling gel comfort', h: 28 + (10 - firmness.value) * 6, cls: 'bg-lime text-ink' },
  { label: 'Memory foam', h: 46, cls: 'bg-sky-300 text-ink' },
  { label: 'Pocket springs', h: 38 + firmness.value * 3, cls: 'bg-orange-300 text-ink' },
  { label: 'Stable base', h: 34, cls: 'bg-stone-500 text-white' },
])

const requestQuote = () => {
  store.interest = 'Mattresses'
  store.message = `I'm a ${position.value.toLowerCase()} sleeper, firmness ${firmness.value}/10 (${feel.value.toLowerCase()}). Interested in the ${pick.value.name}.`
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="finder" class="px-4 py-10 sm:px-8">
    <div
      v-reveal
      class="mx-auto grid max-w-6xl gap-12 rounded-[2.5rem] bg-ink p-8 text-sand sm:p-12 lg:grid-cols-2 lg:p-16"
    >
      <!-- controls -->
      <div>
        <span class="rounded-full border border-sand/20 px-4 py-1.5 text-xs font-semibold text-lime">Sleep Finder</span>
        <h2 class="mt-5 text-4xl font-extrabold leading-none sm:text-5xl">
          Find your<br />perfect firmness.
        </h2>

        <p class="mb-3 mt-10 text-sm font-semibold text-sand/60">How do you sleep?</p>
        <div class="flex gap-2">
          <button
            v-for="p in positions"
            :key="p"
            class="rounded-full border px-5 py-2 text-sm font-semibold transition duration-300"
            :class="position === p ? 'border-lime bg-lime text-ink' : 'border-sand/20 hover:border-lime hover:text-lime'"
            @click="position = p"
          >{{ p }}</button>
        </div>

        <div class="mb-3 mt-10 flex items-center justify-between text-sm font-semibold">
          <span class="text-sand/60">Preferred feel</span>
          <span class="text-lime">{{ feel }} · {{ firmness }}/10</span>
        </div>
        <input
          v-model.number="firmness"
          type="range" min="1" max="10" step="1"
          class="slider"
          :style="{ background: `linear-gradient(to right,#c8f169 ${pct}%, rgba(255,255,255,.18) ${pct}%)` }"
        />
        <div class="mt-2 flex justify-between text-xs text-sand/40"><span>Soft</span><span>Firm</span></div>

        <!-- result -->
        <div class="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
          <p class="text-xs uppercase tracking-widest text-sand/50">We recommend</p>
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-2"
            leave-active-class="transition duration-150"
            leave-to-class="opacity-0"
          >
            <div :key="pick.name">
              <h3 class="mt-1 text-2xl font-extrabold">{{ pick.name }}</h3>
              <p class="mt-1 text-sm text-sand/60">{{ pick.why }}</p>
              <div class="mt-4 flex items-center justify-between">
                <span class="font-display text-2xl font-bold text-lime">${{ pick.price }}</span>
                <button class="btn btn-lime !py-2.5" @click="requestQuote">Get this quote →</button>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- live mattress layers -->
      <div class="flex flex-col justify-center gap-2">
        <div
          v-for="l in layers"
          :key="l.label"
          class="flex items-center rounded-2xl px-5 text-sm font-semibold transition-all duration-500 ease-out"
          :class="l.cls"
          :style="{ height: l.h + 'px' }"
        >{{ l.label }}</div>
        <p class="mt-4 text-center text-xs text-sand/40">Layers adjust live as you change your preference</p>
      </div>
    </div>
  </section>
</template>