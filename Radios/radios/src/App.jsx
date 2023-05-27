import { useState } from "react";

import "./App.css";

function App() {
  const game = ["cricket", "hockey", "football"];
  const days = ["weekend", "weekday"];
  const [gameState,setGame]=useState("")
  const [dayState,setDay]=useState("")
  
  return (
    <>
      <div className="games">

        {game.map((game) => {
          return (
            <span key={game}>
              <input type="radio" id={game} name="game" value={game} onClick={(e)=>{setGame(e.target.value)}}/>
              <label htmlFor={game}>{game}</label>
            </span>
          );
        })}

      </div>

      <div className="day">
        {days.map((day)=>{
            return (<span key={day}>
                <input type="radio" name="day" id={day} value={day}  onClick={(e)=>{setDay(e.target.value)}}/>
                <label htmlFor={day}>{day}</label>
            </span>)
        })}
      </div>

{  (gameState!=="" && dayState!=="" ) &&<div>
        <h1>You have selected...</h1>
        <h2>You want to play {gameState} on {dayState}</h2>
      </div>}
    </>
  );
}

export default App;
