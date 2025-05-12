import Navbar from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";


export default function Dashboard() {
  const cards = [
    { title: "Total Users", value: "1,024", color: "bg-green-100 text-green-800" },
    { title: "Active Sessions", value: "87", color: "bg-blue-100 text-blue-800" },
    { title: "Standards Viewed", value: "2,340", color: "bg-yellow-100 text-yellow-800" },
    { title: "Glossary Terms", value: "450", color: "bg-red-100 text-red-800" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-5 shadow-sm ${card.color} transition hover:scale-105 duration-200`}
            >
              <h3 className="text-sm font-semibold mb-2">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
