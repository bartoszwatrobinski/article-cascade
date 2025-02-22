
import { NewsFeed } from "@/components/NewsFeed"
import { fetchArticles } from "@/services/articles"
import { CategorySelector } from "@/components/CategorySelector"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function IndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('recommended')

  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles
  })

  const filteredArticles = articles && (selectedCategory === 'recommended' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory))

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading articles...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-red-600">Error loading articles</div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold text-[#0B1C2C] mb-3">Latest Tech News</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest in technology and cybersecurity</p>
          <CategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </header>
        <NewsFeed initialArticles={filteredArticles || []} />
      </div>
    </TooltipProvider>
  )
}
