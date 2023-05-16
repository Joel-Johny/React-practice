import React from "react";
import "./App.css";
import { useContext } from "react";
import folderStructure from "./utils/context";
import HandleLevel from "./Components/HandleLevel";
function App() {
  
  const structure1=useContext(folderStructure)
  return (
    
    <div className="App">
      {structure1.map((level,index) => {
        return <HandleLevel key={index} level={level}  />;
      })}
    </div>
  );
}

export default App;
