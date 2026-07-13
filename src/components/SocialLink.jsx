import Icon from './Icon'

export default function SocialLink({ platform, handle, icon, href }) {
  return (
    <a className="flex items-center gap-4 group" href={href}>
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
        <Icon name={icon} />
      </div>
      <div>
        <p className="font-label-caps text-label-caps text-outline uppercase">{platform}</p>
        <p className="font-bold text-primary">{handle}</p>
      </div>
    </a>
  )
}
