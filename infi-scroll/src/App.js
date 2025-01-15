import React, {useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(0);

  const getCardData = async() => {
    console.log('page ', page)
    const fetchedData = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`);
    const data = await fetchedData.json();

    setCardData((prevdata) => [...prevdata, ...data]);
  }

  const handleInfiniteScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      setPage((prev) => prev + 1);
    }
  }
  
  useEffect(() => {
    if (page === 0) {
      setPage(1)
    } else {
      getCardData(page);
    }
  }, [page]);

  useEffect(() => {
    document.addEventListener('scroll', handleInfiniteScroll);
    return () => document.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  return (
    <div className='card-parent'>
        {
          cardData.map((card, i) => (
            <Card data={card} key={i}/>  
          ))   
        }
    </div>
  );
}

export default App;
