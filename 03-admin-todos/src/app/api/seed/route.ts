import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del poder" },
      { description: "Piedra del realidad" },
    ]
  });

  return NextResponse.json({
    message: "Semilla ejecutada con éxito"
  });
};