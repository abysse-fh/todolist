import React, { useContext, useEffect, useState } from "react";
import { STATUS } from "../utils/data";
import TaskColumn from "./taskColumn/TaskColumn";
import { deleteTask, search } from "../services/scrud";
import { ApplicationContext } from "../context/ApplicationContextProvider";

function Tasks() {
  const {
    state: { tasks },
    updateTasks,
  } = useContext(ApplicationContext);


  // Get All Tasks
  const getTasks = async () => {
    const response = await search({ path: "tasks" });
    const data = await response.json();
    response.status === 200
      ? updateTasks(data)
      : alert(`${response.status} - Impossible de récupérer les datas`);
  };

   // Delete by ID
  const removeTask = async (id) => {
    if (confirm("Vous voulez vraiment supprimer la tâche ?")) {
      const response = await deleteTask({ path: "tasks", id: id });
      const data = await response.json();
      response.status === 200
        ? getTasks()
        : alert("Erreur lors de la suppresion");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main className="flex gap-8 w-full p-8 flex-wrap bg-blue-50">
      {STATUS.map((status, index) => (
        <TaskColumn
          key={index}
          title={status}
          tasks={tasks}
          removeTask={removeTask}
        />
      ))}
    </main>
  );
}

export default Tasks;
