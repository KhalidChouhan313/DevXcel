import {
  ChevronDown,
  FileCheck2,
  Home,
  Languages,
  Menu,
  Search,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="bg-[#084C40] text-black w-64 min-h-screen  hidden md:block fixed z-10">
      <div className="bg-[#FFFFFF] p-4 h-[75vh] rounded-b-[40px]  ">
        {" "}
        <img
          src="assets/Images/aaoifi_logo_trans-sm 1.png"
          alt="logo image"
          className="p-2  object-cover"
        />
        <nav className="space-y-[1vh]">
          <div className="flex items-center justify-between gap-3 w-full cursor-pointer
            border-b-2 border-gray-400 py-4">
            <div className="flex gap-2">
              <Languages size={20} />
              <span className="font-[500] text-[#222222]">languages</span>
            </div>
            <ChevronDown />
          </div>

          <div
            className="flex items-center flex-col gap-3 w-full 
          cursor-pointer  border-b-2 border-gray-400 p-1"
          >
            <div className=" flex items-center justify-between w-full py-2">
              <div className="flex gap-2">
                <FileCheck2 className="w-6 h-6" />

                <span className="font-[500] text-[#222222]"> Standard</span>
              </div>
              <ChevronDown />
            </div>
            <div className=" flex items-center justify-between w-full py-2">
              <div className="flex gap-2">
                <img src="assets/Images/image3.png" className="w-6 h-6" />

                <span className="font-[500] text-[#222222]">Codified Standard</span>
              </div>
              <ChevronDown />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 w-full cursor-pointer  border-b-2
           border-gray-400 py-4 px-2">
            <div className="flex gap-2">
              <img src="assets/Images/image4.png" className="w-4 h-6" />
              <span className="font-[500] text-[#222222]">Master Glossary</span>
            </div>
            <ChevronDown />
          </div>
          <div className="flex items-center justify-between gap-3 w-full cursor-pointer  border-gray-400 
          py-4">
            <div className="flex gap-2">
              <Search size={20} />
              <span className="font-[500] text-[#222222]">Advance Search</span>
            </div>
            <ChevronDown />
          </div>
        </nav>
      </div>
      <div className="px-6 text-[#FFFFFF] py-[10vh]">
        <div className="flex items-center ">
          <img
            src="assets/Images/1af2086220affecd5f498aeca93f64918a91bf86.jpg"
            className="mr-2 w-[50px] border-2 rounded-full"
          />

          <div className="flex items-center flex-col gap-2 cursor-pointer ">
            <h2 className="font-semibold text-[15px]">James Brown</h2>
            <span className="flex items-center justify-center gap-2 font-semibold]">
              User2023{" "}
              <img src="assets/Images/image2.png" className="w-[25px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
