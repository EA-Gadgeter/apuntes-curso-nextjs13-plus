import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export const GET =  async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json({
      message: "'take' debe de ser un número",
      error: true
    }, {status: 400});
  }

  if (isNaN(skip)) {
    return NextResponse.json({
      message: "'skip' debe de ser un número",
      error: true
    }, {status: 400});
  }

  const todos = await prisma.todo.findMany({
    take,
    skip
  });

  return NextResponse.json(todos);
};

export const POST =  async (request: Request) => {
  const data = await request.json();

  const newTodo = await prisma.todo.create({data});

  return NextResponse.json(newTodo);
};