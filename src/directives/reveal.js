// Usage: <div v-reveal> or <div v-reveal="200"> (delay in ms)
const HIDDEN = ['opacity-0', 'translate-y-10']
const BASE = ['transition-all', 'duration-700', 'ease-out']

export default {
  mounted(el, binding) {
    el.classList.add(...BASE, ...HIDDEN)
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(...HIDDEN)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}