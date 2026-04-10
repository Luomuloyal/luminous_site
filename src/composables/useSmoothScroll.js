import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
  limitCallbacks: true,
})

export function useSmoothScroll() {
  let resizeObserver

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let resizeTimer
    resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 200)
    })

    resizeObserver.observe(document.body)
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
  })
}
