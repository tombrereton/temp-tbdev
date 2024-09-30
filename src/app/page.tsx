"use client";

import { useEffect } from "react";
import Game from "./js/main.js";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const game = new Game(canvas, ctx);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.render();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col text-white text-center p-5 flex-nowrap">
        <div className="keyboard">
          <span className="key">T</span>
          <span className="key">O</span>
          <span className="key">M</span>
          <span className="key w-3"></span>
          <span className="key">B</span>
          <span className="key">R</span>
          <span className="key">E</span>
          <span className="key">R</span>
          <span className="key">E</span>
          <span className="key">T</span>
          <span className="key">O</span>
          <span className="key">N</span>
        </div>
      </div>
      <canvas id="canvas1" className="absolute bottom-0 left-0 w-full"></canvas>
      <div
        id="modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden"
      >
        <div className="bg-white p-6 rounded-lg text-center w-4/5 max-w-md">
          <span className="close text-gray-500 text-2xl font-bold cursor-pointer float-right">
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Navigation Menu</h2>
          <ul className="text-lg">
            <li className="mb-2">
              <a href="#section1" className="text-blue-500 hover:underline">
                Section 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#section2" className="text-blue-500 hover:underline">
                Section 2
              </a>
            </li>
            <li className="mb-2">
              <a href="#section3" className="text-blue-500 hover:underline">
                Section 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
