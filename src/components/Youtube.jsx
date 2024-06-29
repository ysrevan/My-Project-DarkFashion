import React, { useState } from 'react';

const Youtube = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div className="youtube-container">
      <div 
        className={`video-overlay ${isPlaying ? 'hidden' : ''}`} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/video-bg-scaled.jpg" alt="Overlay" />
      </div>
      <iframe 
        src={`https://www.youtube.com/embed/CQpetweq4L8?si=BnwCbZnnIpGY7jL8${isPlaying ? '&autoplay=1' : ''}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Youtube;


