import React, { createContext, useState } from "react";

export const ApplicationContext = createContext({});

function ApplicationContextProvider({ children }) {
  const [state, setState] = useState({ tasks: [] });
  const updateTasks = (tasks) => {
    setState((currentState) => {
      const newState = { ...currentState, tasks };
      return newState;
    });
  };

  const addUser = (user) => {
    setState((currentState) => {
      const newState = {
        ...currentState,
        users: [...currentState.users, user],
      };
      return newState;
    });
  };
  return (
    <ApplicationContext.Provider value={{ state, updateTasks }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
