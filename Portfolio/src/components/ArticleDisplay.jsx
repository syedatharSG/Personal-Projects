import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ArticleCard from './ArticleCard';

const ArticleDisplay = ({ articles }) => {
  const [visibleArticles, setVisibleArticles] = useState(2); // Number of articles to display

  const showMoreArticles = () => {
    setVisibleArticles(visibleArticles);
  };

  return (
    <div className="text-center">
        <p className="mt-8 font-general-medium text-2xl sm:text-4xl mb-8 text-ternary-dark dark:text-ternary-light">
            Articles
		</p>
        <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
      {articles.slice(0, visibleArticles).map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          imageUrl={article.imageUrl}
          date={article.date}
          content={article.content}
          imageUrl2={article.imageUrl2}
        />
      ))}

      {visibleArticles < articles.length && (
        <Link to="/articles">
          <button
            className="font-general-medium flex justify-center items-center mx-auto w-36 sm:w-48 mt-6 mb-20 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            onClick={showMoreArticles}
          >
            Load More
          </button>
        </Link>
      )}
    </div>
    </div>
    </div>
  );
};

export default ArticleDisplay;