import { FaTiktok, FaInstagram, FaSnapchat, FaWhatsapp } from 'react-icons/fa6'

// Shared image assets (long CDN URLs kept in one place for reuse).
export const images = {
  perfume:
    'perfume1.jpeg',
  bodyMist:
    'bodymist1.png',
  beautyCreams:
    'beautycream1.png',
  lotions:
    'bodylotion1.png',
  supplements:
    'supplements1.png',
  perfumeset:
    'perfumeset1.png',
  heroBackground:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDx6UCvvgU4WgLmH_L40DxJnIMlFWjdty0w74MKIELPxlcRH5huGX1nYlG9K3u0VOU7YAnPpBF7RG_3zqmpQUa70L1nhESfF2mm-c6CCEeeaFnd5CJXpjeCq_gtLNJ6qclL6Xp4Kg1fwQpGiK7rzpyrDNS5qpXZ_72JHMlC8Vpa_0zYPxXTXBjR9kgA9UstbAOY0rk49R-qIaHs40hNt1b1octvaVHU4jxFZ7xkTwCaHiD8jEqJSlQUSQ',
  logo: '/logo.png',
}

export const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Perfumes', href: '#categories' },
  { label: 'Oils', href: '#categories' },
  { label: 'Perfume Sets', href: '#categories' },
  { label: 'Wellness', href: '#gallery' },
  { label: 'About', href: '#contact' },
]

export const categories = [
  { name: 'Perfumes', image: images.perfume },
  { name: 'Beauty Creams', image: images.beautyCreams },
  { name: 'Body Mist', image: images.bodyMist },
  { name: 'Lotions', image: images.lotions },
  { name: 'Supplements', image: images.supplements },
  { name: 'Perfume Sets', image: images.perfumeset },
]

export const galleryItems = [
  { caption: 'Art of Cosmetics', alt: 'Luxury Collection', image: images.perfumeset },
  { caption: 'Restore Ritual', alt: 'Silky Lotions', image: images.lotions },
  { caption: 'Golden Elixirs', alt: 'Premium Oils', image: images.bodyMist },
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
