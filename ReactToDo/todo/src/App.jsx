import { useState } from "react";

import "./App.css";

function App() {
  const [taskInput1, setTaskInput1] = useState("");
  const [taskInput2, setTaskInput2] = useState("");

  const [taskList1, setTaskList1] = useState([]);
  const [taskList2, setTaskList2] = useState([]);

  const addTask1 = () => {
    if (taskInput1.trim() !== "") {
      setTaskList1([...taskList1, taskInput1]);
      setTaskInput1("");
    }
  };
  const addTask2 = () => {
    if (taskInput2.trim() !== "") {
      setTaskList2([...taskList2, taskInput2]);
      setTaskInput2("");
    }
  };
  return (
    <>
      <div className="containers">
        <div className="full-container">
          <h1>Using index as key</h1>
          <div className="taskInputContainer">
            <input
              className="taskInput"
              value={taskInput1}
              onChange={(e) => setTaskInput1(e.target.value)}
            />

            <button onClick={addTask1}>Add</button>
          </div>
          {taskList1.length > 0 ? (
            <div className="tasksContainer">
              {taskList1.map((task, index) => {
                return (
                  <div key={index} className="taskItem">
                    <p>{task} and my key is index {index}</p>
                    {/* here index variable has formed closure with on clicks function cuz even after index got incremented to lenght of list items and it got printed to dom the function inside onclick was able to rememeber the index   */}
                    <button
                      onClick={() =>
                        setTaskList1(taskList1.filter((_, i) => i !== index))
                      }
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="full-container">
          <h1>Using unique id as key</h1>
          <div className="taskInputContainer">
            <input
              className="taskInput"
              value={taskInput2}
              onChange={(e) => setTaskInput2(e.target.value)}
            />

            <button onClick={addTask2}>Add</button>
          </div>
          {taskList2.length > 0 ? (
            <div className="tasksContainer">
              {taskList2.map((task, index) => {
                const id = Math.random().toString(36).substr(2, 9);
                return (
                  <div key={id} className="taskItem">
                    <p>{task} and my key is index {id}</p>
                    <button
                      onClick={() =>
                        setTaskList2(taskList2.filter((_, i) => i !== index))
                      }
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
