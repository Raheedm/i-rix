import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import './fonts.css';
import './App.css';
import RouteComponent from './Routes';
import bgvideo2 from './assets/irixbg3.mp4';
import HomeNav from './components/header/homeNav';
import ToastBar from './components/Toast/ToastBar';
import Footer from './components/footer';

function App() {
  const [open, setOpen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleVideoTimeUpdate = () => {
    const { current: video } = videoRef;
    const endThreshold = 0.1; // Percentage of video duration to trigger loop

    if (video && video.currentTime > video.duration - endThreshold) {
      video.currentTime = 0; // Restart video from the beginning
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Main container */}
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          onTimeUpdate={handleVideoTimeUpdate} // Handle video time update
          ref={videoRef} // Reference to the video element
        >
          <source src={bgvideo2} type="video/mp4" />
        </video>
        <div
          className="nav1"
          style={{ minHeight: '100vh', height: '100%', opacity: open ? '0.5' : '' }}
        >
          {/* Navbar */}
          <div style={{ minHeight: '90vh' }}>
            <RouteComponent
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              inProp={inProp}
              setInProp={setInProp}
            />
            {/* Toast messages */}
            <ToastBar />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
