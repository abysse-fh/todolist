import React, { createContext, useReducer, useState } from "react";
import { ApplicationReducer } from "./ApplicationReducer";

export const ApplicationContext = createContext({});

function ApplicationContextProvider({ children }) {
   const [state, dispatch] = useReducer(ApplicationReducer, {tasks: [], basket: [], users: []})


  const updateTasks = (data) => {
    dispatch({type: "SET_TASKS", data})
  }

  const addUser = (data) => {
    dispatch({type: "ADD_USER", data})
  }
  const addToBasket = (data) => {
    dispatch({type: "ADD_TO_BASKET", data})
  }
  // const updateTasks = (tasks) => {
  //   setState((currentState) => {
  //     const newState = { ...currentState, tasks };
  //     return newState;
  //   });
  // };
//   const addUser = (user) => {
//    setState((currentState) => ({...currentState, users: [...currentState.users, user]}))
//   };

//   const addToBasket = (item) => {
//    setState((currentState) => ({...currentState, basket: [...currentState.basket, item]}))
//  };

  return (
    <ApplicationContext.Provider value={{ state, updateTasks, addToBasket }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
