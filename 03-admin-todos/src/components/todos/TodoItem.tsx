import type { Todo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <button className={`
          flex p-2 rounded-md cursor-pointer
          hover:opacity-60
          text-slate-600
          ${todo.complete ? "bg-blue-100" : "bg-red-100"}
          transition-all duration-100
        `}
        >
          {
            todo.complete
              ? <IoCheckboxOutline size={30}/>
              : <IoSquareOutline size={30} />
          }
          
        </button>

        <div className="text-center sm:text-left">
          {todo.description}
        </div>
      </div>
    </div>
  );
};
