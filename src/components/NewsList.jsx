// src/components/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  if (!articles.length) return <p>No news articles found.</p>;

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
