import React from 'react';
import Video from './components/video-player/Video';
import './App.css';
import Series from './components/series/Series';
import { VideoProvider, useVideoContext } from './components/video-player/VideoContext';
import Footer from './components/Footer/Footer';

const AppContent = () => {
  const { videoUrl } = useVideoContext();

  return (
    <div>
      <div className='title-container'>
        <h1 className='title'>Lego Ninjago</h1>
      </div>
      <Series />
      {videoUrl && <Video videoSrc={videoUrl} />}
      <Footer/>
    </div>
  );
};

const App = () => (
  <VideoProvider>
    <AppContent />
  </VideoProvider>
);

export default App;
