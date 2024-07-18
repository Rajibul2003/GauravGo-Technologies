import React, { useRef, useEffect } from 'react';
import './Home.css';
import video from '../assets/SENA_Trailer.mp4';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          // Handle error (e.g., autoplay restriction)
          console.error('Autoplay failed:', error);
        });
      }
    };

    // Trigger play after page load or user interaction
    playVideo();
  }, []);

  return (
    <div className="hero">
      <video ref={videoRef} loop className="fullscreen-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero__overlay">
        <div className="hero__content">
          <h5>Welcome..</h5>
          <h1>Welcome To GauravGo Technology</h1>
          <p>We are connecting gaming, entertainment, adtech & communication all at one place</p>
          <a href="#services" className="btn">Play now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

