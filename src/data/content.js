import { FaTiktok, FaInstagram, FaSnapchat, FaWhatsapp } from 'react-icons/fa6'

// Shared image assets (long CDN URLs kept in one place for reuse).
export const images = {
  perfume:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD-_LtgiOJ9Sy9Aivz8_BYDPgpaPiZIl1X-JH-IZb03BCh1y-JlTHsdrnxzyveBkJWFAOEU6sFqnrdYbUzmT3-cZxturjGbEIITjMIzWLRbVHAitfxIg7fj1RNoLas4RXiBQiq3NTqpoGpL8Dg0Q-6BMR1L8yi5uktQGgT7GBcItJgzUngmXBLNZsPkfI25K2SV-I4MQcuIJwJfdYozUrZZgZY3laJk7SqQKlVKjjBMOvflKZjBCcF58w',
  bodyOils:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuABOwLZdoL5jqkCpXrXkXUSgDXalNRzrM3vCPP2nrHSLB7YUt0RzWLLRPaaMZ2Rfn042HVE95AugoYB0CX1_tbmek_R4rG8Ju2qeL_NvLySEoJGPQkduWyVNPuckiLM9jjTjOYlXUCNgyckBQ7YUOCO1QvxW8e6yJcOpV0p_qK3jm4Do_k545EhYmE74sWkNgWRhjVP79Vi5pGcoZNQKjsXhvf-7yME_mMyZ3gGeE1-mvSCW6BqrWa2ug',
  beautyCreams:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOg0vUD7z_Y5GOXfUg4KHxcax8yw5s2i7e0iy3dpFjbAcz284UYt4Drycl2sZe9tIZy2rUsJcRtzTD4vCtX-IVvVv-xnVAqfoWTPTbSTC40p7kZLUonJpAb0QOl8Kk8H-Nt5Iyry78OleemWV3EjeKI6vu67jpFf2EWB6EiCG3CuPgKsKtSeK48Wc1j7X3iTfnJdvdRYMBe4j_kYtjZ2jRqEhrGhbssYrug4n4HtP6fygq_FxojMFv4A',
  lotions:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4InZUXmAMfWbIKJASfrknYrHMlsJpy8CioLeJ9DDcRpa_31XfyYK8Snkc5Gz8ZRSZ7VhppvGW750tUU1c59tUbQZ8WScWnsgme6BtN6FvSyuNbaV5cyYQVPXfoFEjvOF66V6uuMPpdoeq6TPFL9WESwyXGRPAfhflDPSugtLC8mC0sUnS-BTB_GoluW9kYw65JJPBG7yz7Uq2gy7BCLjHtiL-_d0sM3CQUmPmGOYiBXCchMMJjTD3Q',
  supplements:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuByiYUJd94aAtBFEzOgNx9db3CNp24QHGJkaRQlxyRGlnINlI2RpiA-tHk10KAqkPHoHyJS6mn_FIGvJtYEM5YXc4MbDll1umreHqbi5iDQAL-LTgEfZJWME3Hz3XDDkXNPaBkeywtG7UOFbJRaCi4igVwOr9jiSW2-YbUAxQY1Zc-1MvwNeiltVKtKaDPGhBrdI5O3PmgwS38HQZ1gH_TbxksNwmZjZlm7p0-7jyAOP_Wk1jj1Bf7qtA',
  cosmetics:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCva36pIiJ4Dzenuj3YoaBTSlmMVKBCZ9UFnfByL48Xtb422si2t6FHRVBX2HIIHM1PBoWzwmoyywOc4V_wL3drUSz-EiLOa4p9v2ptJ_f2ZGuV-WltZm2MJf8zBAj-h8DZK3-eeNAkXo0VNV3CjJfVnaBsKo1HYAX8dYCZ6AubygjHLprJhs0-Oc4njae_3KnEX1-B5T7h8fOxgoj3zN7K_657-91yTqslwbW6qMWe_8jZSuDnqAyeHA',
  heroBackground:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDx6UCvvgU4WgLmH_L40DxJnIMlFWjdty0w74MKIELPxlcRH5huGX1nYlG9K3u0VOU7YAnPpBF7RG_3zqmpQUa70L1nhESfF2mm-c6CCEeeaFnd5CJXpjeCq_gtLNJ6qclL6Xp4Kg1fwQpGiK7rzpyrDNS5qpXZ_72JHMlC8Vpa_0zYPxXTXBjR9kgA9UstbAOY0rk49R-qIaHs40hNt1b1octvaVHU4jxFZ7xkTwCaHiD8jEqJSlQUSQ',
  logo: '/logo.png',
}

export const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Perfumes', href: '#categories' },
  { label: 'Oils', href: '#categories' },
  { label: 'Cosmetics', href: '#categories' },
  { label: 'Wellness', href: '#gallery' },
  { label: 'About', href: '#contact' },
]

export const categories = [
  { name: 'Perfumes', image: images.perfume },
  { name: 'Body Oils', image: images.bodyOils },
  { name: 'Beauty Creams', image: images.beautyCreams },
  { name: 'Lotions', image: images.lotions },
  { name: 'Supplements', image: images.supplements },
  { name: 'Cosmetics', image: images.cosmetics },
]

export const galleryItems = [
  { caption: 'Art of Cosmetics', alt: 'Luxury Collection', image: images.cosmetics },
  { caption: 'Restore Ritual', alt: 'Silky Lotions', image: images.lotions },
  { caption: 'Golden Elixirs', alt: 'Premium Oils', image: images.bodyOils },
  { caption: 'Sensory Journey', alt: 'Elegant Fragrance', image: images.perfume },
  { caption: 'Textured Bliss', alt: 'Beauty Creams', image: images.beautyCreams },
  { caption: 'Inner Vitality', alt: 'Wellness Supplements', image: images.supplements },
]

// Official brand marks with their official badge/icon colors.
export const socialLinks = [
  {
    platform: 'TikTok',
    handle: 'teslimsignature',
    Icon: FaTiktok,
    href: '#',
    badge: '#000000',
    iconColor: '#ffffff',
  },
  {
    platform: 'Instagram',
    handle: 'teslimsignature',
    Icon: FaInstagram,
    href: '#',
    // Instagram's official radial gradient.
    badge:
      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    iconColor: '#ffffff',
  },
  {
    platform: 'Snapchat',
    handle: 'teslim_mercy',
    Icon: FaSnapchat,
    href: '#',
    badge: '#FFFC00',
    iconColor: '#000000',
  },
  {
    platform: 'WhatsApp',
    handle: '08142071665',
    Icon: FaWhatsapp,
    href: 'https://wa.me/08142071665',
    badge: '#25D366',
    iconColor: '#ffffff',
  },
]

export const contactDetails = [
  { label: 'Direct Line', value: '09129504252', icon: 'call' },
  { label: 'Email Inquiry', value: 'teslimmercy421@gmail.com', icon: 'mail' },
]

export const footerLinks = [
  'Privacy Policy',
  'Shipping & Returns',
  'Contact Us',
  'Store Locator',
]
