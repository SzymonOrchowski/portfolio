import { useState, useEffect } from 'react';

// for styling

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

export const timeFormat = (sec) => {
  let str = ''
  str += Math.floor(sec / 60).toString()
  str += ':'
  if (Math.floor(sec % 60) < 10) str += '0'
  str += Math.floor(sec % 60).toString()
  return str
}
