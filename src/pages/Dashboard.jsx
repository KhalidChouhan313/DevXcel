import { Check } from "lucide-react";
import Navbar from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

export default function Dashboard() {
  const cards = [
    {
      title: "Total Users",
      value: "1,024",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Active Sessions",
      value: "87",
      color: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="px-10 py-8 flex flex-col lg:flex-row gap-6 -mt-[18vh]">
          <div className="flex flex-col gap-6 w-full lg:w-[65%]">
            <div className="bg-amber-50 rounded-md p-4 shadow h-[130px]">
              <h2 className="font-semibold mb-1">Top Full Card</h2>
              <p className="text-sm text-gray-700">
                This card covers the full top width.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-amber-50 rounded-md p-4 shadow w-full md:w-1/2 h-[120px]">
                <h2 className="font-semibold mb-1">Bottom Left Card</h2>
                <p className="text-sm text-gray-700">
                  Content of the left card.
                </p>
              </div>
              <div className="bg-amber-50 rounded-md p-4 shadow w-full md:w-1/2 h-[120px]">
                <h2 className="font-semibold mb-1">Bottom Right Card</h2>
                <p className="text-sm text-gray-700">
                  Content of the right card.
                </p>
              </div>
            </div>

            <div className="mt-4 text-gray-600 text-sm">
              <h2 className="font-semibold text-2xl py-3">What is the Conditions?</h2>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                provident. Iure eos facere vero earum, nesciunt delectus ducimus
                adipisci enim quo qui velit culpa, a tempore ab esse rem sed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-[35%]">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-amber-50 rounded-md p-4 py-10 shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Check
                    size={20}
                    className="text-white bg-green-950 rounded-full p-1"
                  />
                  <h2 className="font-semibold">Shariah Standards No {num}</h2>
                </div>
                <p className="text-sm text-gray-700">
                  Detail of standard {num} goes here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
