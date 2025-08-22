import { ReactNode } from "react";
import "@/styles/globals.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">Sidebar</aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
