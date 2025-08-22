"use client";
import { useState } from "react";

export default function EquationCanvasPage() {
  const [equation, setEquation] = useState("sin(x) + cos(y)");

  const handleDraw = () => {
    const canvas = document.getElementById("equationCanvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Simple demo: draw a sine wave
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 100 + Math.sin((x / canvas.width) * 4 * Math.PI) * 50;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Equation Canvas</h1>
      <input
        type="text"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleDraw}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Draw Equation
      </button>
      <canvas
        id="equationCanvas"
        width={600}
        height={300}
        className="border rounded mt-4"
      />
    </div>
  );
}
