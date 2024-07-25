import { TrashIcon, User } from "lucide-react";
import React from "react";

function TaskItem(props) {
  const { title, description, tr, ti, id, users, removeTask } = props;

  return (
    <article className="p-4 rounded border border-blue-300 flex flex-col gap-2 hover:bg-blue-50 hover:dark:bg-slate-700 dark:bg-slate-600 hover:cursor-pointer transition duration-150 ease-out">
      <h3 className="font-semibold  text-xl text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm">{description}</p>
      <div className="flex flex-row flex-wrap gap-y-2">
        {users.map((user, index) => (
          <div key={index} className="flex items-center mr-2 gap-1 text-xs text-blue-500 py-0.5 px-2 border border-blue-500 rounded-full">
            <User size={12} />
            <p >{user.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
        <p>TR : {tr}</p>
        <p>TI : {ti}</p>
      </div>
      <div className="flex gap-8 w-full justify-end mt-4">
        <button
          type="button"
          title={`Voulez-vous supprimer ${title} ?`}
          onClick={() => removeTask(id)}
          className="py-2 px-4 flex gap-2 text-sm items-center rounded text-white bg-red-500  border border-red-700 hover:bg-red-400 hover:dark:bg-red-600 transition duration-150 ease-out"
        >
          <TrashIcon size={16} />
        </button>
      </div>
    </article>
  );
}

export default TaskItem;
