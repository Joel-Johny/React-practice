import { useState } from 'react'

import './App.css'

function App() {
  const tasks1 =["Play Cricket","Play Videogame","Read Book"]
  const [tasks,setTasks]=useState(tasks1)
  const [showDel,setShowDel]=useState([])
  console.log(showDel)
  function handleDelete(index){
    console.log("deleting now",index)
    const newTask=[...tasks]
    newTask.splice(index,1)
    console.log("deleted",newTask)

    setTasks(newTask)
  }
  return (
    <>
      <ul className='taskBox'>
          {tasks.map((task,index)=>{
            return(
              
              <li key={task} className='task'>
                <input name="tasks" id={task} value={task} type="checkbox" onChange={()=>setShowDel((oldState)=>{
                  const newState=[...oldState]
                  if(newState.includes(task))
                  {
                    console.log("Deleting index" ,index)
                    const index1=newState.indexOf(task)
                    newState.splice(index1,1)

                  }
                  else
                    newState.push(task)
                  return newState
                })} />

                <label htmlFor={task}>{task}</label>
                {(showDel.includes(task))&&<button onClick={()=>handleDelete(index)}>DELETE</button>}
              </li>
 
            )
          })}
      </ul>

    </>
  )
}

export default App
