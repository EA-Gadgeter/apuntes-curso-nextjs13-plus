"use client";

import { startTransition, useOptimistic } from "react";

import type { Todo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [ todoOptimistic, setTodoOptimistic ] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => {
        setTodoOptimistic(!todoOptimistic.complete);
      });

      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => {
        setTodoOptimistic(!todoOptimistic.complete);
      });
    }
  };

  return (
    <div className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <button className={`
          flex p-2 rounded-md cursor-pointer
          hover:opacity-60
          text-slate-600
          ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}
          transition-all duration-100
        `}
        onClick={onToggleTodo}
        >
          {
            todoOptimistic.complete
              ? <IoCheckboxOutline size={30}/>
              : <IoSquareOutline size={30} />
          }
          
        </button>

        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
