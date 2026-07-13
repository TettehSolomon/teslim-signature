import Icon from './Icon'
import useScrolled from '../hooks/useScrolled'
import { navLinks, images } from '../data/content'

export default function TopNavBar() {
  const scrolled = useScrolled(50)

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container-lowest/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm dark:shadow-none'
        }`}
    >
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <img
            alt="Teslimsignature Logo"
            className="h-15 md:h-12 w-auto object-contain"
            src={images.logo}
          />
        </div>

        <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-primary border-b-2 border-primary pb-1 font-semibold'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-surface-container px-4 py-2 rounded-full text-on-surface-variant">
            <Icon name="search" className="text-[20px] mr-2" />
            <input
              className="bg-transparent border-none focus:ring-0 p-0 text-body-sm w-32"
              placeholder="Search luxury..."
              type="text"
            />
          </div>
          <a href="https://wa.link/2fiqng">
            <button className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-semibold hover:opacity-80 transition-all duration-300 active:scale-95 text-body-md cursor-pointer">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}
