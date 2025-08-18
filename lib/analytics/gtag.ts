export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

export const isGAEnabled = GA_ID !== "" && process.env.NODE_ENV === "production"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function pageview(url: string) {
  if (!isGAEnabled) return
  window.gtag("event", "page_view", {
    page_path: url,
  })
}

export function event(action: string, params: Record<string, any> = {}) {
  if (!isGAEnabled) return
  window.gtag("event", action, params)
}
