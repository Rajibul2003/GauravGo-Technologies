// App.jsx
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import GameCard from './component/GameCard';
import Advertisers from './component/advertise';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="games">
        <GameCard />
      </section>
      <section id="advertisers">
        <Advertisers />
      </section>
    </div>
  );
}

export default App;
