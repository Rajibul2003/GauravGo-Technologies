import React, { useState, useEffect } from 'react';
import './LoadingBar.css';

const LoadingBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration of the loading animation

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="loading-container">
        <div className="loading-bar"></div>
      </div>
    )
  );
};

export default LoadingBar;
