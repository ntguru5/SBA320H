import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import NewsList from './components/NewsList';

// News API Key
// Getting "process is not defined" error using variable
// const apiKey = process.env.NEWS_API_KEY;
const apiKey = "e4aabda27ab44622ab888d56ac348808";
console.log(apiKey);
function App() {

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('latest');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setStatus('loading');
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.articles);
          setStatus('succeeded');
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setStatus('failed');
        setError(err.message);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <div className="App">
      <h1>News Explorer</h1>
      <Search setQuery={setQuery} />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
