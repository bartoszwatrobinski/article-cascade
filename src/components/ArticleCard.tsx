
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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex h-32">
        <div className="relative w-48 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex-1">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 mb-2">
            {article.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 line-clamp-1 text-sm mt-1">
            {article.excerpt}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
