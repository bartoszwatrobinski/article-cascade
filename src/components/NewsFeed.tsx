
import { useState } from "react";
import { Article } from "../types/article";
import { ArticleCard } from "./ArticleCard";
import { motion } from "framer-motion";

interface NewsFeedProps {
  articles: Article[];
}

export const NewsFeed = ({ articles }: NewsFeedProps) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    // TODO: Implement navigation to full article view
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-6 space-y-4"
    >
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => handleArticleClick(article)}
          />
        ))}
      </div>
    </motion.div>
  );
};
