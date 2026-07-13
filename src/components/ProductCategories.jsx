import Icon from './Icon'
import CategoryCard from './CategoryCard'
import { categories } from '../data/content'

export default function ProductCategories() {
  return (
    <section className="py-24 bg-surface px-gutter overflow-hidden" id="categories">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              The Curated Essentials
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Each category is a testament to our commitment to pure ingredients and luxurious
              results.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              aria-label="Previous"
              className="p-3 rounded-full border border-outline-variant hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              <Icon name="chevron_left" />
            </button>
            <button
              aria-label="Next"
              className="p-3 rounded-full border border-outline-variant hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
