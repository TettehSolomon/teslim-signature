import { FaWhatsapp } from 'react-icons/fa6'
import Icon from './Icon'

const perks = [
  { icon: 'verified', text: 'Authentic luxury products, sourced with care' },
  { icon: 'local_shipping', text: 'Fast nationwide delivery to your doorstep' },
  { icon: 'support_agent', text: 'Personal styling & wellness guidance' },
]

export default function ConnectCard() {
  return (
    <div className="glass-card p-10 rounded-3xl shadow-lg border border-white flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
        Let&apos;s Talk
      </span>
      <h3 className="font-headline-lg text-headline-lg text-primary mt-3">
        Your Signature Awaits
      </h3>
      <p className="text-on-surface-variant mt-4">
        Skip the forms. Message us directly and one of our specialists will help you curate the
        perfect ritual for your skin, scent, and wellness goals.
      </p>

      <ul className="space-y-4 mt-8">
        {perks.map((perk) => (
          <li key={perk.text} className="flex items-start gap-3">
            <Icon name={perk.icon} className="text-secondary text-[22px]" />
            <span className="text-primary font-medium">{perk.text}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.link/2fiqng"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-3"
      >
        <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
        Chat on WhatsApp
      </a>
      <p className="text-center text-body-sm text-outline mt-4">
        Typically replies within minutes
      </p>
    </div>
  )
}
