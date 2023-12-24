import { NextResponse } from "next/server";

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