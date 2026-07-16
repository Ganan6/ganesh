"use client";

import React, { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Events from "./components/events";

export default function Page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showFestival, setShowFestival] = useState(false);

  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="bg-gray-300 text-black py-1 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="fas fa-location-dot text-yellow-800 mr-2"></i>

            <a
              href="https://maps.app.goo.gl/1EQvfTPhtXeBAQFw8"
              target="_blank"
              className="text-sm md:text-lg font-bold hover:text-blue-400 transition"
            >
              Pandy Road, Aberkenfig, Bridgend.
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/profile.php?id=100069003124125" target="_blank" className="bg-blue-500 p-2 rounded-lg hover:bg-yellow-500">
              <i className="fab fa-facebook-f text-white"></i>
            </a>

            <a href="https://youtube.com/@srikalpagavinayakartemple5359?si=zuH3rgdPgPx5dBJU" target="_blank" className="bg-red-600 p-2 rounded-lg hover:bg-yellow-500">
              <i className="fab fa-youtube text-white"></i>
            </a>

            <a href="https://www.instagram.com/srikalpagavinayakar?igsh=MWh3dmxnM29jY2czNQ==" target="_blank" className="bg-black p-2 rounded-lg hover:bg-yellow-500">
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg bg-[url('/main.jpg')] bg-cover bg-center min-h-screen">
        <div className="flex items-top justify-between mb-6 md:pr-12 pr-4">
          <a href="/"><img src="/logo.png" alt="Ganesh" className="h-20 mb-6 opacity-0 bg-white rounded-4xl p-1 animate-[fadeInUp_1s_ease-out_0.25s_forwards]" /></a>
          <Nav />
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center p-4 md:p-16">
          <h1 className="text-4xl font-bold mb-4 bg-black/60 p-2 rounded-xl opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"><i className="fa fa-quote-right fa-flip-horizontal"></i>Harmony, Devotion, Divinity<i className="fa fa-quote-right"></i></h1>
          <p className="text-xl mb-6 bg-black/60 p-2 rounded-xl font-semibold opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">May his divine wisdom lead you on the path to success.</p>
          <p className="text-xl mb-6 bg-black/60 p-2 rounded-xl opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">Opening time: 6pm - 8pm daily.<br />Hours might differ during special days. Check <a href="/events" className="text-yellow-300 hover:underline">events</a> page.</p>
        </div>
      </section>

      {/* Annual Grand Festival 2026 */}
      <section className="mx-4 my-6 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">

          {/* Festival Poster */}
          <div className="flex justify-center order-1">
            <button
              onClick={() => setShowFestival(true)}
              className="group relative cursor-zoom-in"
            >
              <img
                src="/festival.png"
                alt="Sri Kalpaga Vinayakar Temple Annual Grand Festival 2026"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-yellow-400 object-contain transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition rounded-2xl flex items-center justify-center">
                <span className="bg-white/90 text-black px-4 py-2 rounded-lg font-semibold">
                  🔍 Click to Enlarge
                </span>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2">
            <span className="inline-block bg-red-700 text-yellow-300 px-4 py-1 rounded-full font-semibold tracking-wide mb-4">
              ✨ Annual Grand Festival 2026 ✨
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Sri Kalpaga Vinayakar Temple
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Join us for our most sacred annual celebration filled with divine
              blessings, traditional rituals, devotional music, cultural programmes,
              and spiritual togetherness.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-yellow-700 font-semibold">🙏 Spiritual</p>
                <p className="text-gray-600 text-sm">
                  Daily Poojas & Special Ceremonies
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-yellow-700 font-semibold">🎭 Culture</p>
                <p className="text-gray-600 text-sm">
                  Music, Dance & Community Events
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-yellow-700 font-semibold">🍛 Food</p>
                <p className="text-gray-600 text-sm">
                  Traditional Prasadam & Annadhanam
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-yellow-700 font-semibold">❤️ Everyone Welcome</p>
                <p className="text-gray-600 text-sm">
                  Celebrate with Family & Friends
                </p>
              </div>
            </div>

            <a
              href="/festival"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              View Festival Details
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Donation section */}
      <section className=" bg-gray-800 text-white py-12 px-6 md:px-16 m-4 rounded-lg">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Support the Construction of Our New Charity Building
          </h2>

          {/* Why Donate */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Your donation helps us build a permanent home where the next generation can
            discover their roots in <span className="font-semibold text-yellow-300">Hinduism, culture, and tradition</span>.
            Through prayers, cultural activities, and stage programs such as
            <span className="font-semibold"> singing, dance, drama, and speech</span>,
            we nurture confidence, identity, and community pride.
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10">
            <img
              src="/building1.jpg"
              alt="Planned Building 1"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/building2.jpg"
              alt="Planned Building 2"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/building3.jpg"
              alt="Planned Building 3"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/donate"
              className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gray-300 mb-4 rounded-lg pb-6">
        <Events />
        <a href="/events">
          <button className="mx-auto block bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition">
            View All Events
          </button>
        </a>
      </div>

    {showFestival && (
      <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setShowFestival(false)}
      >
        <button
          onClick={() => setShowFestival(false)}
          className="absolute top-4 right-4 text-white text-5xl hover:text-yellow-400"
        >
          &times;
        </button>

        <img
          src="/festival.png"
          alt="Festival Poster"
          className="max-w-full max-h-[95vh] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}

    {/* Footer */}
    <Footer />
    </div>
  );
}