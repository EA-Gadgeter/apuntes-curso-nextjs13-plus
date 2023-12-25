import prisma from "@/lib/prisma";
import type { Metadata } from "next";

import { TodosGrid, NewTodo } from "@/components/todos";

export const metadata: Metadata = {
  title: "Listado de TODOs",
  description: "Listado de TODOs del usuario"
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <NewTodo />

      <TodosGrid todos={todos}/>
    </div>
  );
}