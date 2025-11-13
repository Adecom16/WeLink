// auth-image-pattern.jsx
import React from "react";

export default function AuthImagePattern({ title, subtitle }) {
  // Create a pattern array for the background grid
  const gridPattern = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {gridPattern.map((index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                index % 2 === 0 ? 'animate-pulse' : ''
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
}