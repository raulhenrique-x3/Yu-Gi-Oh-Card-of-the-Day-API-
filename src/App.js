import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [cards, setCards] = useState([]);

  const searchCard = () => {
    axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .then((response) => {
        setCards([response.data])
      })
  }

  return (
    <div>
      <header className="header">
        <h1>
          Yu-Gi-Oh! Card Of the Day [API]
        </h1>
        <button className="searchButton" onClick={searchCard}>Show my card!</button>
      </header>
      

      <section className="cardSect">
        <ul>
          {cards.map((card) => (
            <li key={card.name}>
              <h2>{card.name}</h2>
              <img className='cardImg' src={card.card_images[0].image_url} alt={card.name} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App;
