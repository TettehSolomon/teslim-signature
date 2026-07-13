const INSTAGRAM_URL = 'https://www.instagram.com/teslimsignature'

export default function GalleryItem({ caption, alt, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-square hover-lift">
      <img
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={image}
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-start p-8">
        <p className="text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
          {caption}
        </p>
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-body-sm font-semibold px-6 py-2 rounded-full shadow-md hover:bg-primary/90 active:scale-95 transition-all"
      >
        View
      </a>
    </div>
  )
}
