import React, { createContext, useReducer } from "react";
import { structure } from "./data.js";

export const FolderContext = createContext();

const folderReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_LEVEL":
      // Implement your delete logic here
      console.log("Iam inside here deleting")
      return [
        ...state,
        // updated state after deletion
  ];
    case "ADD_LEVEL":
      // Implement your add logic here
      console.log("Iam inside here adding")

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
  
