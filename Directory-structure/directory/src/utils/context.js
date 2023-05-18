import React, { createContext, useReducer } from "react";
import { structure } from "./data.js";

export const FolderContext = createContext();

const folderReducer = (state, action) => {
  const ID=action.id
  const new_state=JSON.parse(JSON.stringify(state))

  // function parentFinder(parent) {
  //   if(ID===parent.id){
  //     return ;
  //   }
  //   for (const childObj of parent.nest) {
  //     if (childObj.id == ID) {
  //        parentId=parent.id;
  //        return ;
  //     }
  //     if (childObj.type === "folder" && childObj.nest !== undefined) {
  //       parentFinder(childObj); // Pass the entire child object
  //     }
  //   };
  // }
  
 

  // let parentId = "root-1"
  // new_state.forEach((object) => {
  //   if (object.type === "folder")
  //     parentFinder(object);
  // });LOgic to find parent of any object
  
  switch (action.type) {
    case "DELETE_LEVEL":

    function deleter(parent) {
      let index=0;
      for (const childObj of parent.nest) {
        if (childObj.id == ID) {
           console.log("deleting child with id ",childObj.id)
           parent.nest.splice(index,1)
           console.log("now the parent-child nodelist looks like this",parent)
           return ;
           
        }
        if (childObj.type === "folder" && childObj.nest !== undefined) 
          deleter(childObj); // Pass the entire child object
        
        index=index+1;
      };
     
    }
    new_state.forEach((object) => {
      if (object.type === "folder"){
        deleter(object);
      }
      })
    
  

      return new_state
  

    case "ADD_LEVEL":
      // Implement your add logic here
      // console.log("Parent of id ",ID ," is ",parentId)
      function adder(parent) {
        if(ID===parent.id){
          parent.nest.push(addObject)
          return ;
        }
        for (const childObj of parent.nest) {
          if (childObj.type === "folder" && childObj.nest !== undefined) {
            adder(childObj); // Pass the entire child object
          }
        };
      }
      const addObject={
        id:9,
        name:"Joel",
        type:"folder",
        nest:[{
          id:99,
          name:"Johny",
          type:"file"
        }]
      }
      new_state.forEach((object) => {
        if (object.type === "folder")
          adder(object);
      });

      return new_state;
    default:
      return new_state;
  }
};

export const FolderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(folderReducer, structure);
  
    const contextValue = {
      state,
      dispatch
    };
  
    return (
      <FolderContext.Provider value={contextValue}>{children}</FolderContext.Provider>
    );
  };
  
