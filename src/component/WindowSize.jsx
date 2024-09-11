import React, { useState, useEffect } from 'react';

// Create a component called WindowSize
const WindowSize = () => {
  // Create a variable called windowSize and a function to update it (setWindowSize)
  // Set the initial value of windowSize to the current width and height of the browser window
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  // This code will run once when the component is first rendered
  useEffect(() => {
    // Create a function to handle window resizing
    const handleResize = () => {
      // Update the windowSize variable with the new width and height
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    // Tell the browser to call handleResize whenever the window is resized
    window.addEventListener('resize', handleResize);
    // This code will run when the component is removed 
    // It removes the event listener to avoid memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty array means this effect runs only once
  // Display the current window size on the screen
  return (
    <div>
      <p>Window size: {windowSize.width} x {windowSize.height}</p>
    </div>
  );
};
// Make this component available for other parts of the application to use
export default WindowSize;