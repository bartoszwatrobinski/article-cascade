
import { motion } from "framer-motion";
import { Article } from "../types/article";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-lg overflow-hidden transition-shadow duration-300 flex h-24">
        <div className="relative w-32 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3 flex-1">
          <span className="inline-block px-2 py-0.5 text-xs font-medium text-gray-600 mb-1.5">
            {article.category}
          </span>
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-1 mt-1">
            {article.excerpt}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
