import React, { useContext, useState,useRef, useEffect } from "react";
import { FolderContext } from "../utils/context";

const PrintLevel = ({ type, name,id ,setShowNest}) => {
  const {dispatch} =useContext(FolderContext)
 
  const [showInput,setShowInput] = useState(false)
  const [addObject,setAddObject]=useState({
    type:"📁",
    name:""
  })
    let icon=""
    if (type == "folder")
      icon="📁"
    else
      icon="📝"
  
     return (
    <>
     <div className="container">

        <div className="details" onClick={()=>{
              setShowNest((old)=>!old)
              }}>
          {icon}
          {name}
        </div>
  
      <div className="icon-container">
            {(id!=="root-1") &&<img className="icon" src="/del.png" alt="del" onClick={()=>{
            dispatch({type:"DELETE_LEVEL", id : id})
            }} />}
            
           {(type!=="file")&&<img className="icon" src="/add.png" alt="add" onClick={async ()=>{
            await setShowInput((old)=>{
              return !old
            })
          }
          } /> }
        </div>

     </div>

      {(showInput && type=="folder")&&<div className="add-input">

      <div>
          <select value={addObject.type} onChange={(e)=>{

            if(e.target.value=="📁"){
              // console.log("folder detected current value is set to",addObject.type)
              // console.log("E TARGET VALUE",e.target.value)
              setAddObject((old)=>{
                const newState={
                  ...old,
                  type:"📁"
                }
                // console.log("New state selection value is set to :",newState.type)
    
                return newState
                
              })
            }

            if(e.target.value=="📝"){
            // console.log("file detected current value is : ",addObject.type)
            // console.log("E TARGET VALUE",e.target.value)

            setAddObject((old)=>{
            const newState={
              ...old,
              type:"📝"
            }
            // console.log("New state set to ",newState.type)


              return newState
            })
          }

        }}>
              <option value="📁">📁</option>
              <option value="📝">📝</option>
          </select>

          <input 
            type="text"
            value={addObject.name}
            onChange={(e)=>{setAddObject((old)=>{
              const newState={
                ...old,
                name:e.target.value
              
              }
            // console.log("New state's filename set to ",newState.name)

              
              return newState
            })}}
            placeholder={(addObject.type=="📁")?"Enter Folder Name":"Enter File Name"}
          />
      </div>
        
      <div>
          <button onClick={()=>{

            const addObject2={...addObject}
            addObject2.id=parseInt(Math.random()*1000)

            if(addObject2.type=="📁"){

              addObject2.type="folder"
              addObject2.nest=[]
            }
            else{
              addObject2.type="file"
            }
            
            dispatch({type:"ADD_LEVEL", id : id, payload : addObject2})
            // console.log("object sent",addObject)

            setShowInput(false)}}>DONE</button>

          <button onClick={()=>setShowInput(false)}>CANCEL</button>
      </div>
          
      </div>}
    </>
     );
  };

const HandleLevel = ({ level }) => {
  
    const [showNest,setShowNest]=React.useState(false)

    const { type, name ,id } = level;

    return (
      <div>
          <PrintLevel type={type} name={name} id={id} setShowNest={setShowNest}   />
  
        {
       (type == "folder" && level.nest !== undefined  && level.nest.length > 0 && showNest)
       && (
          <div className="nested">
              {
                level.nest.map((eachLevel)=>{
                  return <HandleLevel key={eachLevel.id} level={eachLevel} />;
  
                })
              }
          </div>
        )
      
      }
      </div>
  
    
    )
  };

  export default HandleLevel