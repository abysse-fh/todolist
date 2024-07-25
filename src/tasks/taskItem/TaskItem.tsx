import { TrashIcon } from "lucide-react";
import React from "react";

function TaskItem(props) {
  const { title, description, tr, ti, id, removeTask } = props;

  return (
    <article className="p-4 rounded border border-blue-300 flex flex-col gap-2 hover:bg-blue-50 hover:cursor-pointer transition duration-150 ease-out">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
      <div className="flex justify-between">
        <p>TR : {tr}</p>
        <p>TI : {ti}</p>
      </div>
      <div className="flex gap-8 w-full justify-end mt-4">
        <button
          type="button"
          onClick={() => removeTask(id)}
          className="py-2 px-4 flex gap-2 text-sm items-center rounded text-white bg-red-500  border border-red-700 hover:bg-red-400 transition duration-150 ease-out"
        >
          <TrashIcon size={16} />
        </button>
      </div>
    </article>
  );
}

export default TaskItem;
