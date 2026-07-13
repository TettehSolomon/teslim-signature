export default function CategoryCard({ name, image }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container mb-4 relative">
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-label-caps text-label-caps uppercase text-center text-primary group-hover:text-secondary transition-colors">
        {name}
      </h3>
    </div>
  )
}
