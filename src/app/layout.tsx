import "@/styles/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
