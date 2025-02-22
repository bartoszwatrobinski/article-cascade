
"use client"

import { useState } from "react"
import { Article } from "@/types/article"
import { ArticleCard } from "./ArticleCard"
import { motion } from "framer-motion"

interface NewsFeedProps {
  initialArticles: Article[]
}

export const NewsFeed = ({ initialArticles = [] }: NewsFeedProps) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article)
    // TODO: Implement navigation to full article view
  }

  if (!initialArticles || initialArticles.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 text-center text-gray-600">
        Loading articles...
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-6 space-y-4"
    >
      <div className="space-y-4">
        {initialArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => handleArticleClick(article)}
          />
        ))}
      </div>
    </motion.div>
  )
}
