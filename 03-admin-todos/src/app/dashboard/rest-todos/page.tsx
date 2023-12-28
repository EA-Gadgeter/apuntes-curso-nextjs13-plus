import { redirect } from "next/navigation";
import type { Metadata } from "next";

import prisma from "@/lib/prisma";

import { getUserServerSession } from "@/actions/authActions";

import { TodosGrid, NewTodo } from "@/components/todos";

export const metadata: Metadata = {
  title: "Listado de TODOs",
  description: "Listado de TODOs del usuario"
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RestTodosPage() {
  const user = await getUserServerSession();

  if (!user) return redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
    where: { userId: user.id }
  });

  return (
    <div>
      <NewTodo />

      <TodosGrid todos={todos}/>
    </div>
  );
}