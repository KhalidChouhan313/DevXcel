import React from "react";
import { Home, User, Settings } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="bg-[#215148] text-white w-64 min-h-screen p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-10">AAOIFI</h1>
      <nav className="space-y-6">
        <div className="flex items-center gap-3 cursor-pointer hover:text-green-300">
          <Home size={20} />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-green-300">
          <User size={20} />
          <span>Users</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-green-300">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </div>
  );
};
