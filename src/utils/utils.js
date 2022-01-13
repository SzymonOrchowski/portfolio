import { useState, useEffect } from 'react';

// for styling

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

///
// Time Formating from seconds to 00:00
///

export const timeFormat = (sec) => {
  let str = ''
  str += Math.floor(sec / 60).toString()
  str += ':'
  if (Math.floor(sec % 60) < 10) str += '0'
  str += Math.floor(sec % 60).toString()
  return str
}
