import prisma from "@/lib/prisma";
import type { Metadata } from "next";

import { TodosGrid } from "@/components/todos";

export const metadata: Metadata = {
  title: "Listado de TODOs",
  description: "Listado de TODOs del usuario"
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      {/* Formulario para agregar todos */}
      <TodosGrid todos={todos}/>
    </div>
  );
}