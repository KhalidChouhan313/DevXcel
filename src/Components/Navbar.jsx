import React from "react";
import { Search, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-[#215148] shadow-md px-6 h-[25vh]  rounded-b-[8vh] flex justify-end items-baseline">
      <div className="flex items-center justify-center gap-6 text-white text-lg py-3">
        <Search className="cursor-pointer hover:scale-110 transition" />
        <Bell className="cursor-pointer hover:scale-110 transition" />
        <UserCircle className="cursor-pointer hover:scale-110 transition" />
      </div>
    </div>
  );
}
