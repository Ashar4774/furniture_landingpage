<script setup>
import { reactive, ref } from 'vue'
import { store } from '../store'

const form = reactive({ name: '', phone: '' })
const sent = ref(false)
const loading = ref(false)

const submit = async () => {
  loading.value = true
  // TODO: connect to your Laravel API, e.g.
  // await axios.post('/api/enquiries', { ...form, interest: store.interest, message: store.message })
  await new Promise((r) => setTimeout(r, 800)) // demo delay
  loading.value = false
  sent.value = true
  Object.assign(form, { name: '', phone: '' })
  store.interest = 'Beds'
  store.message = ''
}

const field =
  'w-full rounded-2xl border-2 border-ink/10 bg-white px-5 py-3.5 outline-none transition focus:border-ink'
</script>

<template>
  <section id="contact" class="px-4 py-10 sm:px-8">
    <div v-reveal class="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-lime p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
      <div class="flex flex-col justify-between gap-8">
        <h2 class="text-4xl font-extrabold leading-none sm:text-6xl">
          Let's get<br />you sleeping.
        </h2>
        <ul class="grid gap-2 text-sm font-semibold">
          <li>✦ Free delivery &amp; setup</li>
          <li>✦ 100-night comfort guarantee</li>
          <li>✦ Easy installment plans</li>
          <li>✦ We call back within 24 hours</li>
        </ul>
      </div>

      <div>
        <Transition
          mode="out-in"
          enter-active-class="transition duration-300"
          enter-from-class="opacity-0 scale-95"
          leave-active-class="transition duration-150"
          leave-to-class="opacity-0"
        >
          <div v-if="sent" key="done" class="rounded-3xl bg-ink p-10 text-center text-sand">
            <p class="text-5xl">🎉</p>
            <h3 class="mt-3 text-3xl font-extrabold">You're all set!</h3>
            <p class="mb-6 mt-2 text-sand/60">We'll contact you shortly.</p>
            <button class="btn btn-lime" @click="sent = false">Send another</button>
          </div>

          <div v-else key="form" class="grid gap-3">
            <input v-model.trim="form.name" type="text" placeholder="Your name" :class="field" />
            <input v-model.trim="form.phone" type="tel" placeholder="Phone number" :class="field" />
            <select v-model="store.interest" :class="field">
              <option>Beds</option>
              <option>Mattresses</option>
              <option>Bed + Mattress set</option>
            </select>
            <textarea v-model.trim="store.message" rows="3" placeholder="Anything we should know?" :class="field"></textarea>
            <button class="btn btn-dark !py-4" :disabled="loading || !form.name || !form.phone" @click="submit">
              {{ loading ? 'Sending...' : 'Request free quote →' }}
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>