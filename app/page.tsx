"use client";

import React, { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Events from "./components/events";

export default function Page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen">

      {/* Header */}
      <title>SKHCA | Home</title>

      <header className="bg-gray-300 text-black py-1 px-6">

        <div className="flex items-center w-full">
          <i className="fas fa-location-dot text-yellow-800 mr-2"></i>
          <a href="https://maps.app.goo.gl/1EQvfTPhtXeBAQFw8" target="_blank" className="text-sm md:text-lg font-bold hover:text-blue-400 transition delay-150 ease-in-out">Pandy Road, Aberkenfig, Bridgend</a>
          <a href="https://www.facebook.com/profile.php?id=100069003124125" target="_blank" className="btn text-sm md:text-lg ml-auto bg-blue-400 p-2 rounded-lg hover:bg-yellow-500 transition ease-in-out"><i className="fab fa-facebook-f text-white text-sm md:text-lg"></i></a>
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

    {/* Footer */}
    <Footer />
    </div>
  );
}