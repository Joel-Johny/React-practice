import { useState,useEffect } from "react";

import "./App.css";

const TaskItem = ({ task, index, deleteTask }) => {
  useEffect(() => {
    console.log(`Task rendered: ${task}`);

    return () => {
      console.log(`Task deleted: ${task}`);
    };
  }, [task]);

  return (
    <div className="taskItem">
      <p>{task}</p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

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
      const uniqueId = Math.random().toString(36).substring(2)
      setTaskList2([...taskList2, {id : uniqueId, task :taskInput2}]);
      setTaskInput2("");
    }
  };

  const deleteTask1 = (index) => {
    setTaskList1((tasks)=>tasks.filter((_, i) => i !== index));
  };
  const deleteTask2 = (index) => {
    setTaskList2((tasks)=>tasks.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="containers">
        <p>Create 4 tasks then delete the 3rd Task When each Task Item gets rendered you will get a console that task was renedered similarly consoles on deletion</p>
        <div className="full-container">
          <h1>Using index as key</h1>
          <p>Here when we delete the 3rd task in console it will unmount the 3rd as well as 4th task 
          Because the index of 4th task now changed and became 3 Hence react will get confused and it will re render task 4 again</p>
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
                  <TaskItem key={index} task={task} index={index} deleteTask={deleteTask1} />
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="full-container">
          <h1>Using unique id as key</h1>
          <p>Here when we delete the 3rd task in console it will delete and unmount only the 3rd task
          Unlike the above case React will not rerender the task below it ie task4 as its key remains constant if key == index was assigned then react would have to rerender task 4</p>
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
                return (
                  <TaskItem key={task.id} task={task.task} index={index} deleteTask={deleteTask2} />
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