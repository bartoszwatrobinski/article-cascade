
import { NewsFeed } from "@/components/NewsFeed"
import { fetchArticles } from "@/services/articles"
import { CategorySelector } from "@/components/CategorySelector"
import { useEffect, useState } from "react"
import { Article } from "@/types/article"

export default function IndexPage() {
  const [articles, setArticles] = useState<Article[]>([])
  
  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await fetchArticles()
      setArticles(fetchedArticles)
    }
    
    loadArticles()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-[#0B1C2C] mb-3">Latest Tech News</h1>
        <p className="text-xl text-gray-600">Stay updated with the latest in technology and cybersecurity</p>
        <CategorySelector />
      </header>
      <NewsFeed initialArticles={articles} />
    </div>
  )
}
