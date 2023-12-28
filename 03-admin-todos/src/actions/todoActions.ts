"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";
import type { Todo } from "@prisma/client";

import { getUserServerSession } from "@/actions/authActions";


const sleep = async (seconds: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  await sleep(3);

  const todo =  await prisma.todo.findFirst({
    where: { id }
  });

  if (!todo) {
    throw `Todo con ${id} no encontrado`;
  }

  revalidatePath("/dashboard/server-todos");
  return prisma.todo.update({
    where: { id },
    data: {complete}
  });
};

export const addTodo = async (description: string) => {
  try {
    const user = await getUserServerSession();

    if (!user)
      throw new Error("Error creando un todo");

    const newTodo =  await prisma.todo.create({
      data: {
        description,
        userId: user.id
      }
    });

    revalidatePath("/dashboard/server-todos");
    return newTodo;
  } catch (error) {
    return {
      message: "Error creando un todo"
    };
  }
};

export const deleteCompletedTodos = async () => {
  await prisma.todo.deleteMany({
    where: { complete: true }
  });

  revalidatePath("/dashboard/server-todos");
};