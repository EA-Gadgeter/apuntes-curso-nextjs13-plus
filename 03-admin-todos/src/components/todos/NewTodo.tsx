"use client";

// Con REST
// import { useRouter } from "next/navigation";

import { useState } from "react";
import type { FormEvent } from "react";

import { IoTrashOutline } from "react-icons/io5";

// import {  createTodo, deleteCompleted } from "@/services/todos";
import { addTodo, deleteCompletedTodos } from "@/actions/todoActions";

export const NewTodo = () => {
  // const router = useRouter();

  const [todoText, setTodoText] = useState("");

  const onSubmitTodo = async (event: FormEvent) => {
    event.preventDefault();

    if (todoText.trim().length === 0) return;

    await addTodo(todoText);

    // Con REST
    // router.refresh();

    setTodoText("");
  };

  /*const onDeleteCompleted = async () => {
    await deleteCompleted();
    router.refresh();
  };*/

  return (
    <form  className='flex w-full items-center mb-5' onSubmit={onSubmitTodo}>
      <input
        type="text"
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={e => setTodoText(e.target.value)}
        value={todoText}
      />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={ () => deleteCompletedTodos() }
        type='button' className="flex gap-2 items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Eliminar completados
      </button>
    </form>
  );
};