import React, { useState, useEffect, useDebugValue } from 'react';


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
 
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

   
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  useDebugValue('WindowSize Hook');

  return windowSize;
}

function App() {
  const windowSize1 = useWindowSize();
  const windowSize2 = useWindowSize();
  const windowSize3 = useWindowSize();

  return (
    <div>
      <h1>Window Sizes</h1>
      <p>
        Window 1 Size: {windowSize1.width}x{windowSize1.height}
      </p>
      <p>
        Window 2 Size: {windowSize2.width}x{windowSize2.height}
      </p>
      <p>
        Window 3 Size: {windowSize3.width}x{windowSize3.height}
      </p>
    </div>
  );
}

export default App;
