"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `block md:inline-block pb-1 text-base ${
      pathname === path
        ? "text-white font-semibold border-b-2 border-white"
        : "text-white font-semibold hover:text-yellow-300 transition ease-in-out"
    }`;

  return (
    <nav className="mt-2">
      {/* Top bar */}
      <div className="flex justify-end items-center md:justify-end">
        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-white text-2xl flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="/" className={linkClass("/")}>Home</a>
          <a href="/about" className={linkClass("/about")}>About</a>
          <a href="/events" className={linkClass("/events")}>Events</a>
          <a href="/donate" className={linkClass("/donate")}>Donations</a>
          <a href="/contact" className={linkClass("/contact")}>Contact Us</a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="flex flex-col mt-3 gap-3 md:hidden bg-black/70 p-4 rounded-lg">
          <a href="/" className={linkClass("/")} onClick={() => setOpen(false)}>Home</a>
          <a href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>About</a>
          <a href="/events" className={linkClass("/events")} onClick={() => setOpen(false)}>Events</a>
          <a href="/donate" className={linkClass("/donate")} onClick={() => setOpen(false)}>Donations</a>
          <a href="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
