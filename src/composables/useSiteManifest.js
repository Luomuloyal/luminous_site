import { computed, readonly, ref } from 'vue'

import { createEmptySiteManifest, fetchSiteManifest } from '../lib/siteRuntime'

const manifest = ref(createEmptySiteManifest())
const loading = ref(false)
const loaded = ref(false)
const error = ref(null)

let pendingRequest = null

async function loadSiteManifest(force = false) {
  if (pendingRequest && !force) {
    return pendingRequest
  }

  if (loaded.value && !force) {
    return manifest.value
  }

  loading.value = true
  error.value = null

  pendingRequest = (async () => {
    try {
      const nextManifest = await fetchSiteManifest()
      manifest.value = nextManifest
      loaded.value = true
      return nextManifest
    } catch (caughtError) {
      error.value = caughtError
      console.error('[site-manifest] Failed to load runtime media manifest')
      console.error(caughtError)
      return manifest.value
    } finally {
      loading.value = false
      pendingRequest = null
    }
  })()

  return pendingRequest
}

export function useSiteManifest() {
  if (!loaded.value && !loading.value) {
    void loadSiteManifest()
  }

  const screenshots = computed(() => manifest.value.screenshots || [])
  const screenshotMap = computed(
    () => new Map(screenshots.value.map((item) => [item.id, item])),
  )
  const download = computed(() => manifest.value.download)

  function getScreenshotById(id) {
    return screenshotMap.value.get(id) || null
  }

  return {
    manifest: readonly(manifest),
    loading: readonly(loading),
    loaded: readonly(loaded),
    error: readonly(error),
    download,
    screenshots,
    getScreenshotById,
    refreshSiteManifest: loadSiteManifest,
  }
}
