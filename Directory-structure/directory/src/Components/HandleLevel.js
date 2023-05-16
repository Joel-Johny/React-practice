import React, { useContext } from "react";
import { FolderContext } from "../utils/context";

const PrintLevel = ({ type, name,id }) => {
  const {dispatch} =useContext(FolderContext)

    let icon=""
    if (type == "folder")
      icon="📁"
    else
      icon="📝"
  
     return (
     <div className="container">
        <div className="details">
          {icon}
          {name}
        </div>
  
        <div className="icon-container">
          <img className="icon" src="/del.png" alt="del" onClick={()=>{
            dispatch(              {type:"DELETE_LEVEL", id : id}              )
            }} />
          <img className="icon" src="/add.png" alt="add" onClick={()=>{
            dispatch({type:"ADD_LEVEL", id : id})
          }}></img>
        </div>
     </div>
     );
  };

const HandleLevel = ({ level }) => {
  
    const [showNest,setShowNest]=React.useState(false)
    const { type, name ,id } = level;
    return (
      <div>
        <div onClick={()=>{
              setShowNest((old)=>!old)
              }}
        >
              <PrintLevel type={type} name={name} id={id}  />
        </div>
  
        {
       (type == "folder" && level.nest !== undefined  && level.nest.length > 0 && showNest)
       && (
          <div className="nested">
              {
                level.nest.map((eachLevel,index)=>{
                    return <HandleLevel key={index} level={eachLevel}/>
  
                })
              }
          </div>
        )
      
      }
      </div>
  
    
    )
  };

  export default HandleLevel