import "./App.css";
import React, { useRef, useState, useEffect } from 'react';

function ClickCounter() {
  const countRef = useRef(0);  // useRef to store the count (does not cause re-render persistanct across re renders unlike normal let const variable)
  const [renderCount, setRenderCount] = useState(0);  // State to track re-renders

  // Log when the component re-renders
  useEffect(() => {
    console.log('Component re-rendered');
  });

  const handleClickRef = () => {
    countRef.current += 1;  // Update the ref value
    console.log(`useRef value updated: ${countRef.current} (No re-render)`);
  };

  const handleClickState = () => {
    setRenderCount(renderCount + 1);  // This causes a re-render
    console.log(`State value updated: ${renderCount + 1} (Re-rendered)`);
  };

  return (
    <div>
      <p>Button clicked (tracked with ref): {countRef.current}</p>
      <button onClick={handleClickRef}>Click Me (useRef - No Re-render)</button>
      <br />
      <p>Component re-render count: {renderCount}</p>
      <button onClick={handleClickState}>Click Me (State - Re-render)</button>
    </div>
  );
}



function App() {
  return (
    <>
      <div className="container">
        <ClickCounter/>
      </div>
    </>
  );
}

export default App;
