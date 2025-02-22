
import { articles } from "../data/articles";
import { NewsFeed } from "../components/NewsFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
          <p className="mt-2 text-gray-600">Stay updated with the latest developments</p>
        </div>
      </header>
      <NewsFeed articles={articles} />
    </div>
  );
};

export default Index;
