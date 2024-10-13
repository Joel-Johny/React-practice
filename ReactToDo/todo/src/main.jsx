import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <App />
)
    // jsx gets unmounted from dom when we delete the jsx from task is it? Doubt2
    // return () => {
    //   console.log(`Task deleted: ${task}`);
    // };

 // Doubt 1 solved id should not be kept inside map then each rerender will create a new id assign it same jsx elemente at each rerender
//     <div>
//     <button onClick={addTask}>Add Task</button>
//     {tasks.map(({ id, task },index) => (
//         id = new Unique ID
//       <TaskItem key={index} task={task} id={id} deleteTask={()=>deleteTask(task,index)} />
//     ))}
//   </div>


 // Doubt 3 solved useEffect hook is not needed here
// Console.logging item delted in 2 ways
// 1 inside function delete task
// 2 inside the useEffect of taskItem in return statement