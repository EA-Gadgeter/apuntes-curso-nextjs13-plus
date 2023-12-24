import { NextResponse } from "next/server";
import * as yup from "yup";

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

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export const POST =  async (request: Request) => {
  try {
    const { complete, description } = await postSchema.validate(await request.json());
    const newTodo = await prisma.todo.create({
      data: {
        complete,
        description
      }
    });

    return NextResponse.json(newTodo);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};