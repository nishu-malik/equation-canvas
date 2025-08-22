import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-6">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to Equation Canvas</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Build, edit, and visualize equations on an interactive canvas. Generate art and music from math functions and explore your creativity!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link href="/dashboard">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Dashboard Home</button>
        </Link>
        <Link href="/dashboard/equations">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Equation Canvas</button>
        </Link>
        <Link href="/about">
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">About</button>
        </Link>
        <Link href="/contact">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Contact</button>
        </Link>
      </div>
    </div>
  );
}
