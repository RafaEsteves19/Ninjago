import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  const setOnVideoSelect = (url) => {
    setVideoUrl(url);
  };

  return (
    <VideoContext.Provider value={{ videoUrl, setOnVideoSelect }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
