import Icon from './Icon'
import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="w-full pb-10 bg-primary dark:bg-tertiary-container text-on-primary dark:text-on-tertiary-container">


      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/20 text-center">
        <p className="font-body-sm text-body-sm text-outline-variant">
          © 2024 Teslimsignature. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
