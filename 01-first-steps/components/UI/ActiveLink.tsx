"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FC } from "react";

interface Props {
  text: string;
  path: string;
}

export const ActiveLink: FC<Props> = ({ text, path }) => {
  const pathName = usePathname();

  const stylesPath = pathName === path ? "text-blue-500" : "hover:text-blue-400";

  return (
    <Link href={path} className={`hover:underline  transition-all ${stylesPath}`}>
      {text}
    </Link>
  );
};  