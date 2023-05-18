import React, { createContext, useReducer } from "react";
import { structure } from "./data.js";

export const FolderContext = createContext();

const folderReducer = (state, action) => {
  const ID=action.id
  const new_state=JSON.parse(JSON.stringify(state))

  function parentFinder(parent) {
    for (const childObj of parent.nest) {
      if (childObj.id == ID) {
         parentId=parent.id;
         return ;
      }
      if (childObj.type === "folder" && childObj.nest !== undefined) {
        parentFinder(childObj); // Pass the entire child object
      }
    };
  }
  
 

  let parentId = 1
  new_state.forEach((object) => {
    if (object.type === "folder")
      parentFinder(object);
  });
  
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
        if (childObj.type === "folder" && childObj.nest !== undefined) {
          deleter(childObj); // Pass the entire child object
        }
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

      return [
        ...state,
        // updated state after addition
      ];
    default:
      return state;
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
  
