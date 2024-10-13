import React, { useState, useEffect } from 'react';

const TaskItem = ({ task, index, deleteTask }) => {
  useEffect(() => {
    console.log(`Task rendered: ${task}`);

    return () => {
      console.log(`Task deleted: ${task}`);
    };
  }, [task]);

  return (
    <div>
      <p>{task}</p>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
