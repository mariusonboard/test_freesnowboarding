import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'freesnowboarding.xyz',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/nobodies.png',
    name: 'Freesnowboarding',
    status: '🏴‍☠️',
    bio: 'This website is about snowboarding & individuals who develop their own unique style within their passion. <br/><br/> Ride free, stick together.'
  },
  themeColor: '#3D4451'
}
