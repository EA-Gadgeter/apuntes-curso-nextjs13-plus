"use client";

import type { FC, ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: ReactNode;
  title: string;
  subtitle: string
}

export const SiderbarMenuItem: FC<Props> = ({ icon, path, title, subtitle }) => {
  const pathName = usePathname();
  const menuStyle = path === pathName && "bg-blue-800";

  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${menuStyle}`}>
      {icon}

      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  );
};
