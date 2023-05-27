import { useState } from 'react'

import './App.css'

function App() {
  const tasks1 =["Play Cricket","Play Videogame","Read Book"]
  const [tasks,setTasks]=useState(tasks1)

  return (
    <>
      <ul className='taskBox'>
          {tasks.map((task,index)=>{
            return(
              <li key={task} className='task'>
                <input name="tasks" id={task} value={task} type="checkbox" />
                <label htmlFor={task}>{task}</label>
                <button onClick={()=>{
                  const newTask=[...tasks]
                  newTask.splice(index,1)
                  setTasks(newTask)
                }}>DELETE</button>
              </li>
            )
          })}
      </ul>

    </>
  )
}

export default App
