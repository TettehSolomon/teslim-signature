export default function SocialLink({ platform, handle, Icon, href, badge, iconColor }) {
  return (
    <a className="flex items-center gap-4 group" href={href}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
        style={{ background: badge, color: iconColor }}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </div>
      <div>
        <p className="font-label-caps text-label-caps text-outline uppercase">{platform}</p>
        <p className="font-bold text-primary">{handle}</p>
      </div>
    </a>
  )
}
