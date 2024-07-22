import React, { useRef } from 'react';
import './Home.css';
import video from '../assets/SENA_Trailer.mp4';

const Home = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  };

  return (
    <div className="hero">
      <video ref={videoRef} autoPlay loop muted className="fullscreen-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero__overlay">
        <div className="hero__content">
          <h5>Welcome..</h5>
          <h1>Welcome To GauravGo Games Technology</h1>
          <p>We are connecting gaming, entertainment, adtech & communication all at one place</p>
          <a href="#services" className="btn" onClick={handlePlay}>Play now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
