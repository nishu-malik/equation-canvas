import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">Equation Canvas</div>
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/equations">Equations</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
    </nav>
  );
}
