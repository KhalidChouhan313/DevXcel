import React from "react";
import { Home, User, Settings, ArrowDown, Languages, Search } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="bg-[#215148] text-black w-64 min-h-screen  hidden md:block">
      <div className="bg-white p-4 h-[70%] rounded-b-2xl ">
        {" "}
        <img
          src="assets/Images/IMG-20250512-WA0005[1].jpg"
          alt="logo image"
          className="p-3 mb-3"
        />
        <nav className="space-y-6">
          <div className="flex items-center justify-between gap-3 w-full cursor-pointer hover:text-green-300 border-b-2 border-gray-400 p-3">
            <div className="flex gap-2">
              <Languages size={20} />
              <span>languages</span>
            </div>
              <ArrowDown />
          </div>
          
          <div className="flex items-center justify-between gap-3 w-full cursor-pointer hover:text-green-300 border-b-2 border-gray-400 p-3">
            <div className="flex gap-2">
              <Home size={20} />
              <span>Standard</span>
            </div>
              <ArrowDown />
          </div>
          
          <div className="flex items-center justify-between gap-3 w-full cursor-pointer hover:text-green-300 border-b-2 border-gray-400 p-3">
            <div className="flex gap-2">
              <Search size={20} />
              <span>Advance Search</span>
            </div>
              <ArrowDown />
          </div>
          
        </nav>
      </div>
      <div className="px-6 text-white py-[10vh]">
        <div className="flex items-center ">
          <User size={40} className="mr-2 border-2 rounded-full" />

          <div className="flex items-center flex-col gap-2 cursor-pointer hover:text-green-300">
            <h2>James Brown</h2>
            <span>User2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
