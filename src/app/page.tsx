
import { NewsFeed } from "@/components/NewsFeed"
import { fetchArticles } from "@/services/articles"
import { CategorySelector } from "@/components/CategorySelector"

// This is now a Server Component
async function HomePage() {
  // Server-side data fetching
  const articles = await fetchArticles()

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

export default HomePage
