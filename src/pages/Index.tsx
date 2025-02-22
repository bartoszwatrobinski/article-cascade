
import { articles } from "../data/articles";
import { NewsFeed } from "../components/NewsFeed";
import { useState } from "react";

const categories = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'cryptocurrency', label: 'Cryptocurrency' },
  { id: 'technology', label: 'Technology' },
  { id: 'politics', label: 'Politics' },
  { id: 'sports', label: 'Sports' },
  { id: 'lifestyle', label: 'Lifestyle' }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('recommended');

  const filteredArticles = selectedCategory === 'recommended' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-[#0B1C2C] mb-3">Latest Tech News</h1>
        <p className="text-xl text-gray-600">Stay updated with the latest in technology and cybersecurity</p>
        
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
      </header>
      <NewsFeed articles={filteredArticles} />
    </div>
  );
};

export default Index;
