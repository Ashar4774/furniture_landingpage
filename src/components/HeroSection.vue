<script setup>
const marquee = [
  'Orthopedic support',
  'Cooling gel layers',
  '100-night trial',
  'Free delivery',
  '10-year warranty',
  'Handcrafted frames',
]
</script>

<template>
  <section id="home" class="relative grid min-h-screen lg:grid-cols-2">
    <!-- LEFT: content -->
    <div class="relative z-10 flex flex-col justify-center px-6 pb-28 pt-36 sm:px-12 lg:pl-16 lg:pr-10 xl:pl-24">
      <span class="mb-6 inline-flex w-fit animate-fade-up items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-xs font-semibold">
        <span class="h-2 w-2 rounded-full bg-lime-dark"></span> New · Cloud Series 2026
      </span>

      <h1
        class="animate-fade-up text-5xl font-extrabold leading-[0.95] sm:text-6xl xl:text-7xl"
        style="animation-delay: .1s"
      >
        Sleep
        <span class="inline-block -rotate-2 rounded-2xl bg-lime px-3">smarter.</span><br />
        Wake up<br />
        <span class="italic text-ink/40">unreal.</span>
      </h1>

      <p class="mt-6 max-w-md animate-fade-up text-lg text-ink/60" style="animation-delay: .25s">
        Orthopedic mattresses and handcrafted bed frames, engineered around how you actually sleep.
      </p>

      <div class="mt-9 flex animate-fade-up flex-wrap gap-3" style="animation-delay: .4s">
        <a href="#finder" class="btn btn-dark">Find my mattress →</a>
        <a href="#collection" class="btn btn-ghost">Browse collection</a>
      </div>

      <!-- social proof -->
      <div class="mt-12 flex animate-fade-up items-center gap-4" style="animation-delay: .55s">
        <div class="flex -space-x-3">
          <span class="h-10 w-10 rounded-full border-2 border-sand bg-gradient-to-br from-amber-300 to-orange-500"></span>
          <span class="h-10 w-10 rounded-full border-2 border-sand bg-gradient-to-br from-sky-300 to-indigo-500"></span>
          <span class="h-10 w-10 rounded-full border-2 border-sand bg-gradient-to-br from-rose-300 to-pink-500"></span>
          <span class="h-10 w-10 rounded-full border-2 border-sand bg-gradient-to-br from-emerald-300 to-teal-500"></span>
        </div>
        <p class="text-sm leading-tight">
          <strong class="block text-base">4.9 / 5 ★★★★★</strong>
          <span class="text-ink/50">from 2,300+ happy sleepers</span>
        </p>
      </div>
    </div>

    <!-- RIGHT: half-page image -->
    <div class="relative min-h-[60vh] lg:min-h-full">
      <div class="absolute inset-0 overflow-hidden bg-clay lg:rounded-bl-[7rem]">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=75"
          alt="Modern bedroom"
          class="h-full w-full animate-zoom object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <!-- floating glass cards -->
      <div class="absolute left-5 top-28 animate-float rounded-2xl border border-white/40 bg-white/25 p-4 text-white shadow-xl backdrop-blur-xl lg:left-8">
        <p class="text-xs uppercase tracking-widest text-white/80">Pressure relief</p>
        <p class="font-display text-3xl font-extrabold">98%</p>
      </div>

      <div class="absolute bottom-28 right-5 animate-float-slow rounded-2xl border border-white/40 bg-white/25 p-4 text-white shadow-xl backdrop-blur-xl lg:right-10">
        <p class="text-xs uppercase tracking-widest text-white/80">Cooling gel</p>
        <p class="font-display text-3xl font-extrabold">−4°C</p>
      </div>

      <div class="absolute bottom-44 left-5 hidden animate-float rounded-2xl bg-lime p-4 shadow-xl sm:block lg:-left-10">
        <p class="text-xs font-semibold uppercase tracking-widest">From</p>
        <p class="font-display text-3xl font-extrabold">£499</p>
      </div>
    </div>

    <!-- marquee -->
    <!-- <div class="absolute inset-x-0 bottom-0 z-20 overflow-hidden bg-ink py-3.5 text-sand">
      <div class="flex w-max animate-marquee">
        <div v-for="n in 2" :key="n" class="flex shrink-0">
          <span v-for="m in marquee" :key="m + n" class="mx-6 flex items-center gap-6 text-sm font-semibold uppercase tracking-widest">
            {{ m }} <span class="text-lime">✦</span>
          </span>
        </div>
      </div>
    </div> -->
  </section>
</template>