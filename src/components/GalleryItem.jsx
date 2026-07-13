export default function GalleryItem({ caption, alt, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-square hover-lift">
      <img
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
        <p className="text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
          {caption}
        </p>
      </div>
    </div>
  )
}
