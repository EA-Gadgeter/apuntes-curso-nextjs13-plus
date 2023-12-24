import { NextResponse } from "next/server";
import * as yup from "yup";

import prisma from "@/lib/prisma";

interface Arguments {
  params: {
    id: string;
  }
}

export const GET = async (request: Request, { params }: Arguments ) => {
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: { id }
  });

  if (!todo) {
    return NextResponse.json({
      message: `Todo con id: ${id} no existe`
    }, { status: 404 });
  }

  return NextResponse.json(todo);
};

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional()
});
export const PUT = async (request: Request, { params }: Arguments ) => {
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: { id }
  });

  if (!todo) {
    return NextResponse.json({
      message: `Todo con id: ${id} no existe`
    }, { status: 404 });
  }

  try {
    const { complete, description } = await putSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        complete,
        description
      }
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};