
"use client"

const categories = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'cryptocurrency', label: 'Cryptocurrency' },
  { id: 'technology', label: 'Technology' },
  { id: 'politics', label: 'Politics' },
  { id: 'sports', label: 'Sports' },
  { id: 'lifestyle', label: 'Lifestyle' }
]

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="flex justify-center gap-4 mt-8 flex-wrap px-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${category.id === selectedCategory 
              ? 'bg-[#0B1C2C] text-white' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
