import React from "react";

const PrintLevel = ({ type, name }) => {
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
          <img className="icon" src="/del.png" ></img>
          <img className="icon" src="/add.png"></img>
        </div>
     </div>
     );
  };

const HandleLevel = ({ level }) => {
  
    const [showNest,setShowNest]=React.useState(false)
    const { type, name } = level;
    return (
      <div>
        <div onClick={()=>{
              setShowNest((old)=>!old)
              }}
        >
              <PrintLevel type={type} name={name}  />
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