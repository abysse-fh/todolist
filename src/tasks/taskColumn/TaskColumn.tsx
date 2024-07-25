import React, { useState } from "react";
import TaskItem from "../taskItem/TaskItem";

function TaskColumn({ title, tasks, removeTask, addToCart }) {

  const countTasks = tasks.filter((task) => title === task.status).length;
  return (
    <div className="flex-1 p-4 pt-0 border rounded bg-white dark:bg-slate-800 relative border-blue-300 flex flex-col gap-4 min-w-64 max-h-[698px] overflow-y-auto">
      <h2 className="text-xl text-blue-500 dark:text-slate-200 font-bold sticky top-0 py-4 bg-white dark:bg-slate-800  w-full">{title} <span className="text-xs">({countTasks})</span></h2>
      {tasks
        .filter((task) => title === task.status)
        .map((task, index) => (
          <TaskItem
            removeTask={removeTask}
            key={index}
            status={title}
            title={task.title}
            taskStatus={task.status}
            description={task.description}
            tr={task.tr}
            ti={task.ti}
            id={task.id}
            users={task.users}
          />
        ))}
    </div>
  );
}

export default TaskColumn;
