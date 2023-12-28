import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  // Si el usuario no existe lo creamos
  if (!user) {
    return await createaUser(email, password);
  }

  // La contraseña coincide
  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }

  return user;
};

export const createaUser = async (email: string, password: string) => {
  return prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0]
    }
  });
};