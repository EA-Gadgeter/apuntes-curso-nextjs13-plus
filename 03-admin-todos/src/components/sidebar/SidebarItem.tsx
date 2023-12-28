"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  href: string;
  title: string;
}

export const SidebarItem = ({ href, title, icon }: Props) => {
  const pathName = usePathname();

  const activeStyles = pathName === href 
    ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
    : "text-gray-600";

  return (
    <li>
      <Link href={href} className={`px-4 py-3 flex items-center space-x-4 rounded-xl ${activeStyles}`}>
        {icon}
        <span className="mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};