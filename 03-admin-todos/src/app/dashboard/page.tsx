import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { WidgetItem } from "@/components/WidgetItem";


import { authOptions } from "../api/auth/[...nextauth]/route";
import {getUserServerSession} from "@/actions/authActions";

export default async function DashboardPage() {
  const user = await getUserServerSession();

  if (!user){
    return redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title="Usuario conectado S-side">
        <div className="flex flex-col">
          <span>{user.name}</span>
          <span>{user.image}</span>
          <span>{user.email}</span>

          <div>
            {JSON.stringify(user)}
          </div>
        </div>
      </WidgetItem>
    </div> 
  );
}