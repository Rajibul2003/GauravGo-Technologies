import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import GameCard from './component/GameCard';
import Advertisers from './component/advertise';
import Footer1 from './component/Footer1.jsx';
import Founders from './component/Founders.jsx';

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
      <section id="Founders">
         <Founders/>
      </section>
        <section id="contact">
          <Footer1/>
        </section>

    </div>
  );
}

export default App;
