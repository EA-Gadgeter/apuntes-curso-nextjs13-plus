import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";


export const GET = async () => {

  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
          { description: "Piedra del poder" },
          { description: "Piedra del realidad" }
        ]
      }
    }
  });

  /*await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del poder" },
      { description: "Piedra del realidad" },
    ]
  });*/

  return NextResponse.json({
    message: "Semilla ejecutada con éxito"
  });
};