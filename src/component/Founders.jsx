import React from 'react';
import './Founders.css'; // Import the CSS file

const Founders = () => {
  return (
    <div className='founders'>
      <h1 className='heading'>Our Founding Partners</h1>
      <div className='founders__container'>
        <div className='founders__item'>
          <img src="src/assets/Dipesh.png" alt="Founder" className='founders__image' />
          <p className='founders__name'>Dipesh Gaurav</p>
          <p className='founders__role'>(Founder)</p>
        </div>
        <div className='founders__item'>
          <img src="src/assets/Sriman.png" alt="Co-Founder" className='founders__image' />
          <p className='founders__name'>Sriman Rabisankar Dash</p>
          <p className='founders__role'>(Co-Founder)</p>
        </div>
      </div>
    </div>
  );
}

export default Founders;