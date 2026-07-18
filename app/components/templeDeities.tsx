"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marcellus } from "next/font/google";
import ganapathiData from "@/data/32ganapathy.json";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// A spread of 8 forms across the full set of 32, sampled for visual variety
// around the ring (every 4th form).
const RING_INDICES = [0, 4, 8, 12, 16, 20, 24, 28];

export default function TempleDeities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ringDeities = RING_INDICES.map((i) => ganapathiData.deities[i]).filter(
    Boolean
  );
  const stripDeities = ganapathiData.deities;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-[#3D0F14] py-8 px-4 rounded-lg m-4"
    >
      {/* faint radial glow behind everything, evoking sanctum lamplight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 78% 50%, rgba(212,160,23,0.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_1fr]">
        {/* ---- Text column ---- */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
            Sri Kalpaga Vinayakar Temple
          </span>

          <h2
            className={`${marcellus.className} text-[2.1rem] leading-[1.15] text-[#FBF3E7] sm:text-4xl md:text-[2.6rem]`}
          >
            Different forms & structures one temple,
            <br className="hidden sm:block" /> every stage of life
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#E9D9C4] sm:text-base">
            High above the sanctum, the Trithala Vimana carries all
            thirty-two forms of Ganapathi in stone — from the courage of
            Vira Ganapathi to the quiet surrender of Bhakti Ganapathi. Step
            closer and find the form that speaks to where you are now.
            Also, take a look at meaningful structures and interesting facts.
          </p>

          <Link
            href="/templeDeities"
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#D4A017]/50 pb-1 text-sm font-medium tracking-wide text-[#D4A017] transition-colors hover:border-[#D4A017] hover:text-[#e9c157]"
          >
            Get to know
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* ---- Desktop: orbiting ring ---- */}
        <div className="relative hidden h-[460px] md:block">
          {/* guide circle: centered via explicit left/top 50% + translate,
              NOT flex — absolutely positioned children ignore flex alignment */}
          <div className="ring-outline absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4A017]/25" />

          {/* zero-size anchor point pinned to the exact center; every orbit
              item's rotate+translate is measured from this single point */}
          <div className="ring absolute left-1/2 top-1/2 h-0 w-0">
            {ringDeities.map((deity, i) => {
              const angle = i * (360 / ringDeities.length);
              return (
                <div
                  key={deity.slug}
                  className="orbit-item absolute left-0 top-0"
                  style={{
                    transform: `rotate(${angle}deg) translate(140px) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="counter-spin -ml-8 -mt-8">
                    <Link
                      href={`/templeDeities/${deity.slug}`}
                      className="block h-16 w-16 overflow-hidden rounded-full border-2 border-[#D4A017]/60 shadow-[0_0_0_4px_rgba(61,15,20,0.9)] transition-transform duration-300 hover:scale-110 hover:border-[#D4A017]"
                      title={deity.heading}
                    >
                      <Image
                        src={`/32ganapathy/${deity.image}`}
                        alt={deity.heading}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* center medallion, centered the same guaranteed way */}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B3272D] shadow-[0_0_40px_rgba(212,160,23,0.3)]">
            <span
              className={`${marcellus.className} text-3xl text-[#FBF3E7]`}
            >
              ॐ
            </span>
          </div>
        </div>

        {/* ---- Mobile: scrolling strip ---- */}
        <div className="relative -mx-6 md:hidden">
          <div className="strip-track flex w-max gap-4 px-6">
            {[...stripDeities, ...stripDeities].map((deity, i) => (
              <Link
                key={`${deity.slug}-${i}`}
                href={`/templeDeities/${deity.slug}`}
                className="flex w-20 flex-shrink-0 flex-col items-center gap-2"
              >
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#D4A017]/50">
                  <Image
                    src={`/32ganapathy/${deity.image}`}
                    alt={deity.heading}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-center text-[11px] leading-tight text-[#E9D9C4]">
                  {deity.heading.replace(" Ganapathi", "").replace(" Ganapati", "")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ring {
          animation: spin 70s linear infinite;
        }
        .counter-spin {
          animation: spin-reverse 70s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .strip-track {
          animation: scroll-x 34s linear infinite;
        }
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ring,
          .counter-spin,
          .strip-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
