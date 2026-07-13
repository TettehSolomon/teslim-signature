/**
 * Thin wrapper around a Material Symbols Outlined glyph.
 * Usage: <Icon name="search" className="text-[20px]" />
 */
export default function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}
