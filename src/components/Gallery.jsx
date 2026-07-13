import GalleryItem from './GalleryItem'
import { galleryItems } from '../data/content'

export default function Gallery() {
  return (
    <section className="py-32 bg-white px-gutter" id="gallery">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">The Luxury Gallery</h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryItem key={item.caption} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
