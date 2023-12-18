// LOS LINKS PUEDEN FUNCIONAR SIN JS
import Link from "next/link";

import { HomeIcon } from "@primer/octicons-react";

import { ActiveLink } from "@/components/UI/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center gap-1">
        <HomeIcon /> 
        Home
      </Link>

      <ul className="flex gap-2">
        {
          navItems.map(item => (
            <li key={item.path}>
              <ActiveLink {...item}/>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};