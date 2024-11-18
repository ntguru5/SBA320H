// src/components/NewsItem.js
import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default NewsItem;
