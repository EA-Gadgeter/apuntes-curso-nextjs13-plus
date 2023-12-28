import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import {
  IoBasketOutline,
  IoCalendarClearOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPerson
} from "react-icons/io5";

import { SidebarItem } from "./SidebarItem";
import { LogoutButton } from "@/components/sidebar/LogoutButton";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: <IoCalendarClearOutline /> },
  { title: "Rest TODOs", href: "/dashboard/rest-todos", icon: <IoCheckboxOutline /> },
  { title: "Server TODOs", href: "/dashboard/server-todos", icon: <IoListOutline /> },
  { title: "Cookies", href: "/dashboard/cookies", icon: <IoCodeWorkingOutline /> },
  { title: "Productos", href: "/dashboard/products", icon: <IoBasketOutline />  },
  { title: "Perfil", href: "/dashboard/profile", icon: <IoPerson /> }
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name ?? "No name";
  const userAvatar = session?.user?.image ?? "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
  const userRole = session?.user?.roles ?? ["client"];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image 
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" 
              className="w-32"
              width={150}
              height={150} 
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image 
            src={userAvatar}
            width={150} 
            height={150}
            alt="" 
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />

          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>

          <span className="hidden text-gray-400 lg:block capitalize">{userRole.join(",")}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            sidebarItems.map(item => (
              <SidebarItem key={item.href} {...item}/>
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};