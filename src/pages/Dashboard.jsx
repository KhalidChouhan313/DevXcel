import { Check } from "lucide-react";
import Navbar from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import DashboardCard from "../Components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F9F6EE]">
      <aside className="w-[19vw] min-w-[250px] max-w-[300px]">
        <Sidebar />
      </aside>

      <main className="flex-1 relative z-10">
        <Navbar />
        <section className="p-4">
          <DashboardCard />
        </section>
      </main>
    </div>
  );
}
