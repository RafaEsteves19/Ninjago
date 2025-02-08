import React, { useState, useEffect } from 'react';
import './Video.css';

const Video = ({ videoSrc, onClose }) => {
  return (
    <div className="video-container">
      <iframe
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="BitChute Video"
      />
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

const VideoPlayer = ({ videoSrc }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        const videoElement = document.querySelector('.video-container');
        if (videoElement) {
          const top = videoElement.getBoundingClientRect().top + window.scrollY;
          const middle = top - (window.innerHeight / 2) + (videoElement.clientHeight / 2);
          window.scrollTo({ top: middle, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    window.location.reload();
  };

  return (
    <>
      {isVisible && (
        <Video
          videoSrc={videoSrc}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default VideoPlayer;
