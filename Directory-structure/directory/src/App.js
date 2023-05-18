import React from "react";
import "./App.css";
import { useContext } from "react";
import {FolderContext,FolderProvider} from "./utils/context"
import HandleLevel from "./Components/HandleLevel";

function App() {
  
  const { state } = useContext(FolderContext);
  return (
    
    <div className="App">
      {state.map((level,index) => {
        return <HandleLevel key={index} level={level}  />;
      })}
    </div>
  );
}

function AppWrapper(){

  return (
    <FolderProvider>
      <App/>
    </FolderProvider>

  )
}

export default AppWrapper;
