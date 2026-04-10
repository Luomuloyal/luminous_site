// src/composables/usePerformanceOptimization.js
import { ref, onMounted, watch } from 'vue'

export function usePerformanceOptimization() {
  const animationLevel = ref('medium')
  const reduceMotion = ref(false)
  const enableCardAnimation = ref(true)
  const enableBackgroundAnimation = ref(false)

  // 检测系统动画偏好
  function checkPrefersReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    return mediaQuery.matches
  }

  // 检测设备性能
  function detectDevicePerformance() {
    // 检查设备内存
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      return 'low'
    }

    // 检查CPU核心数
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      return 'low'
    }

    // 检查网络
    if (navigator.connection) {
      const effectiveType = navigator.connection.effectiveType
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        return 'low'
      }
      if (effectiveType === '3g') {
        return 'medium'
      }
    }

    // 检查电池状态
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        if (!battery.charging && battery.level < 0.2) {
          return 'low'
        }
      })
    }

    return 'high'
  }

  // 应用动画级别到DOM
  function applyAnimationLevel(level) {
    const html = document.documentElement
    html.classList.remove('animation-level-low', 'animation-level-medium', 'animation-level-high')
    html.classList.add(`animation-level-${level}`)

    // 根据级别启用/禁用不同的动画
    if (level === 'low') {
      html.classList.remove('has-card-animation', 'has-bg-animation')
      enableCardAnimation.value = false
      enableBackgroundAnimation.value = false
    } else if (level === 'medium') {
      html.classList.add('has-card-animation')
      html.classList.remove('has-bg-animation')
      enableCardAnimation.value = true
      enableBackgroundAnimation.value = false
    } else {
      html.classList.add('has-card-animation', 'has-bg-animation')
      enableCardAnimation.value = true
      enableBackgroundAnimation.value = true
    }
  }

  // 优化Lighthouse性能指标
  function optimizeWebVitals() {
    // 启用JavaScript执行优化
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          // 延迟加载非关键资源
          const images = document.querySelectorAll('img[loading="lazy"]')
          images.forEach((img) => {
            if ('loading' in img) {
              img.loading = 'lazy'
            } else {
              // 降级方案
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    img.src = img.dataset.src
                    observer.unobserve(img)
                  }
                })
              })
              observer.observe(img)
            }
          })
        },
        { timeout: 2000 }
      )
    }

    // 优化字体加载
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded')
      })
    }
  }

  // 初始化
  onMounted(() => {
    // 检查用户偏好
    if (checkPrefersReducedMotion()) {
      animationLevel.value = 'low'
      reduceMotion.value = true
    } else {
      // 检测设备性能
      const performance = detectDevicePerformance()
      animationLevel.value = performance === 'low' ? 'low' : 'medium'
    }

    // 应用设置
    applyAnimationLevel(animationLevel.value)
    optimizeWebVitals()

    // 监听动画级别变化
    watch(animationLevel, (newLevel) => {
      applyAnimationLevel(newLevel)
    })

    // 监听网络变化
    if (navigator.connection) {
      navigator.connection.addEventListener('change', () => {
        const performance = detectDevicePerformance()
        animationLevel.value = performance === 'low' ? 'low' : 'medium'
      })
    }

    // 监听系统动画偏好变化
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', (e) => {
      reduceMotion.value = e.matches
      if (e.matches) {
        animationLevel.value = 'low'
      }
    })
  })

  return {
    animationLevel,
    reduceMotion,
    enableCardAnimation,
    enableBackgroundAnimation,
  }
}
