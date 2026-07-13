import Icon from './Icon'
import { images } from '../data/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-gutter pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${images.heroBackground}')` }}
        />
      </div>

      <div className="relative z-20 max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-secondary-container/30 px-4 py-1.5 rounded-full border border-secondary-container/50">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-on-secondary-container font-label-caps text-label-caps uppercase tracking-widest">
              New Luxury Collection
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary max-w-xl lg:text-7xl leading-[1.1]">
            Unveil Your <span className="text-secondary italic">Signature</span> Radiance
          </h1>

          <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
            Exquisite fragrances, restorative oils, and high-performance cosmetics crafted for
            those who define elegance through wellness. Experience the Teslimsignature standard.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.link/2fiqng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover-lift transition-all flex items-center gap-2"
            >
              Explore Collection <Icon name="arrow_forward" />
            </a>
            <a
              href="https://wa.link/2fiqng"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-secondary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container/20 transition-all"
            >
              View Rituals
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative group">
          <div className="absolute -inset-4 bg-secondary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <img
            alt="Signature Perfume"
            className="relative z-10 w-4/5 mx-auto rounded-2xl shadow-2xl hover-lift transition-transform duration-500"
            src={images.perfume}
          />
        </div>
      </div>
    </section>
  )
}
