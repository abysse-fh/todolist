import React, { createContext, useState } from "react";

export const ApplicationContext = createContext({});

function ApplicationContextProvider({ children }) {
  const [state, setState] = useState({ tasks: [], users: [], basket: [] });

  const updateTasks = (tasks) => {
    setState((currentState) => {
      const newState = { ...currentState, tasks };
      return newState;
    });
  };
  const addUser = (user) => {
   setState((currentState) => ({...currentState, users: [...currentState.users, user]}))
  };

  const addToBasket = (item) => {
   setState((currentState) => ({...currentState, basket: [...currentState.basket, item]}))
 };

  return (
    <ApplicationContext.Provider value={{ state, updateTasks, addToBasket }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
