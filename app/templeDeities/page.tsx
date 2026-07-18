"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Nav from "../components/nav";
import ganapathiData from "../../data/32ganapathy.json";

export default function Page() {
  const { intro, deities } = ganapathiData;

  // === Scroll-trigger reveal for the grid (single observer, staggered per card) ===
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === gridRef.current && entry.isIntersecting) {
            setGridVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Nav Section */}
      <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg">
        <div className="flex items-top justify-between mb-2 md:pr-12 pr-4">
          <a href="/">
            <img
              src="/logo.png"
              alt="Ganesh"
              className="h-20 opacity-0 bg-white rounded-4xl p-1 animate-[fadeInUp_1s_ease-out_0.25s_forwards]"
            />
          </a>
          <Nav />
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-20 pb-8 animate-[fadeInUp_1.2s_ease-out_0.5s_forwards] opacity-0">
        <span className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
          Trithala Vimana
        </span>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-orange-600">
          {intro.title}
        </h1>

        <p className="text-lg md:text-xl max-w-4xl leading-relaxed text-gray-200">
          {intro.englishText}
        </p>

        <div className="mt-8 h-1 w-24 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full" />
      </div>

      {/* Deities Grid Section */}
      <section className="relative my-4 py-12 px-6 md:px-10 m-4 bg-linear-to-b from-amber-50 to-white overflow-hidden rounded-2xl">
        <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
          Tap a form below to read its story, in English and Tamil.
        </p>

        <div
          ref={gridRef}
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        >
          {deities.map((deity, i) => {
            const delay = Math.min(i * 40, 640);
            return (
              <Link
                key={deity.slug}
                href={`/templeDeities/${deity.slug}`}
                className={`group relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  gridVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* image card */}
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/40 to-orange-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg ring-2 ring-yellow-400/30 transition-all duration-500 group-hover:ring-yellow-400 group-hover:shadow-2xl group-hover:shadow-orange-400/30 group-hover:-translate-y-2 group-active:scale-95">
                    <img
                      src={`/32ganapathy/${deity.image}`}
                      alt={deity.heading}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* order badge — the 32 forms are a real numbered sequence on the vimana */}
                    <span className="absolute top-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-xs font-bold text-yellow-400 backdrop-blur-sm">
                      {deity.order}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-sm md:text-base font-bold text-amber-800 group-hover:text-orange-600 transition-colors duration-300">
                  {deity.heading}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {deity.headingTamil}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
