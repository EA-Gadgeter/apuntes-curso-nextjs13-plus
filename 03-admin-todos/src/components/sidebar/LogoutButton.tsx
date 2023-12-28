"use client";

import { useSession, signOut, signIn } from "next-auth/react";

import { CiLogout } from "react-icons/ci";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <span className="hover:text-gray-700">Wait...</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        onClick={() => signIn()}
      >
        <CiLogout/>
        <span className="hover:text-gray-700">Login</span>
      </button>
    );
  }

  return (
    <button
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      onClick={() => signOut()}
    >
      <CiLogout/>
      <span className="hover:text-gray-700">Logout</span>
    </button>
  );
};