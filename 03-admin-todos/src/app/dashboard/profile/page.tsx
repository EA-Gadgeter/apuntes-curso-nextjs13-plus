"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile page</h1>
      <hr />

      <div className="flex flex-col ">
        <span>{session?.user?.name ?? "No name"}</span>
      </div>
    </div>
  );
}