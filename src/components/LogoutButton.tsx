"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react"; // Optional: icon

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition-all"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
}
