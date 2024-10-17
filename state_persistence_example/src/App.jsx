import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  let vari = 0; // Reset on every render
  let vari2 = useRef(0); // Reset on every render
  console.log("Component re-rendered. let vari initialized to 0:", vari,"and vari2 value",vari2);

  return (
    <>
    <h1>State persistence example</h1>
      <p>Here we have created 4 variables</p>
      <ul>
        <li>state1: {state1}</li>
        <li>state2: {state2}</li>
        <li>vari : {vari} (created using normal let/const)</li>
        <li>vari2 : {vari2.current} (created using useRef)</li>
      </ul>
      <p>Every time i click on increment button it also increments vari and vari2 variables but on rerender of component (on state change) vari does not retain its value and get reinitialised but vari 2 remains persistent across renders and does not get reinit</p>
      <h5>See console logs as well</h5>
      <div className="App">
        {/* Button to increment state1 */}
        <button
          onClick={() => {
            vari = vari + 1; // Increment vari locally
            console.log("Vari after increment:", vari); // Log updated vari

            vari2.current = vari2.current + 1; // Increment vari2 locally
            console.log("Vari2 after increment:", vari2); // Log updated vari2

            setState1((old) => old + 1); // Increment state1
          }}
        >
          Increment state1
        </button>
        {state1} {/* Display state1 */}
        <br />
        {/* Button to increment state2 */}
        <button
          onClick={() => {
            vari = vari + 1; // Increment vari locally
            console.log("Vari after increment:", vari); // Log updated vari

            vari2.current = vari2.current + 1; // Increment vari2 locally
            console.log("Vari2 after increment:", vari2); // Log updated vari2

            setState2((old) => old + 1); // Increment state2
          }}
        >
          Increment state2
        </button>
        {state2} {/* Display state2 */}
      </div>
    </>
  );
}

export default App;
