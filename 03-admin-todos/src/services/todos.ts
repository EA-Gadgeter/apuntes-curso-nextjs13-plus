import type { Todo } from "@prisma/client";

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const body = {
    complete
  };

  const todoUpdated: Todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

  return todoUpdated;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = {
    description
  };

  const newTodo: Todo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

  return newTodo;
};

export const deleteCompleted = async () => {
  await fetch("/api/todos", {
    method: "DELETE"
  });
};