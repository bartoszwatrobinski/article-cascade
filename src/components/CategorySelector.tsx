
"use client"

import { useState } from "react"

const categories = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'cryptocurrency', label: 'Cryptocurrency' },
  { id: 'technology', label: 'Technology' },
  { id: 'politics', label: 'Politics' },
  { id: 'sports', label: 'Sports' },
  { id: 'lifestyle', label: 'Lifestyle' }
]

export function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState('recommended')

  return (
    <div className="flex justify-center gap-4 mt-8 flex-wrap px-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
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
