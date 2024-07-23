import React from 'react';
import './advertise.css';

const Advertise = () => {
  return (
    <div className="advertise-container">
      <h1 className="advertise-heading">Our Advertiser</h1>
      <img 
        src="src/assets/Advertise.png" 
        alt="Advertiser" 
        className="advertise-image" 
      />
    </div>
  );
}

export default Advertise;

