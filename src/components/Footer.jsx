import Icon from './Icon'
import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-primary dark:bg-tertiary-container text-on-primary dark:text-on-tertiary-container">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-headline-lg text-headline-lg font-bold text-on-primary dark:text-on-tertiary-container">
            Teslimsignature
          </div>
          <p className="text-body-sm font-body-sm text-outline-variant max-w-xs text-center md:text-left">
            Redefining the standards of luxury wellness and professional beauty through scientific
            precision and sensory indulgence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-body-sm text-body-sm">
          {footerLinks.map((link) => (
            <a
              key={link}
              className="text-outline-variant hover:text-on-primary transition-colors cursor-pointer"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors cursor-pointer">
            <Icon name="public" className="text-[20px]" />
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors cursor-pointer">
            <Icon name="favorite" className="text-[20px]" />
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/20 text-center">
        <p className="font-body-sm text-body-sm text-outline-variant">
          © 2024 Teslimsignature Luxury Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
