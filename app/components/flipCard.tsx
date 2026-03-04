"use client";

import React, { useState } from "react";

interface FlipCardProps {
  title: string;
  image: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, image, description }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div
      className="relative w-full h-72 cursor-pointer"
      style={{ perspective: 1200 }} // 3D depth
      onClick={toggleFlip}
    >
      {/* Inner container */}
      <div
        className="relative w-full h-full duration-700 transition-transform"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d", // Safari
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          WebkitTransform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", // Safari
          willChange: "transform",
        }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-xl flex flex-col justify-center items-center text-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <div className="relative z-10 px-6">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <button className="bg-amber-300 px-4 py-2 rounded-xl text-sm text-black font-semibold hover:bg-amber-400 transition">
              Click to view details
            </button>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-xl p-6 flex flex-col justify-center text-center bg-orange-600 text-white"
          style={{
            transform: "rotateY(180deg)",
            WebkitTransform: "rotateY(180deg)", // Safari
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;