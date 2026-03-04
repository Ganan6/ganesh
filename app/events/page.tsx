"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Events from "../components/events";
import Calendar from "../components/calendar";
import events from "../components/events";

export default function Page() {

  const [current, setCurrent] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;

      const firstCard = container.firstElementChild as HTMLElement | null;
      if (!firstCard) return;

      const gap = 24; // space-x-6 = 1.5rem = 24px
      const cardWidth = firstCard.offsetWidth + gap;

      container.scrollTo({
          left: index * cardWidth,
          behavior: "smooth"
      });

      setCurrent(index);
  };

  React.useEffect(() => {
  const interval = setInterval(() => {
      const next = (current + 1) % events.length;
      scrollToIndex(next);
  }, 4000);
  return () => clearInterval(interval);
  }, [current]);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
  setActiveCard(activeCard === index ? null : index);
};


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Nav Section */}
      <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg bg-linear-to-r from-orange-600 to-red-600">
        <div className="flex items-top justify-between mb-2 md:pr-12 pr-4">
          <a href="/">
            <img
              src="/logo.png"
              alt="Ganesh"
              className="h-20 bg-white rounded-3xl p-1 shadow-md"
            />
          </a>
          <Nav />
        </div>
      </section>

      {/* Events Section */}
      <Events />

      {/* Calandar */}
      <Calendar />
      
      {/* General Events Section */}
      <section className="py-6 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
          General Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Panguni Uththaram",
              image: "/events/panguni.png",
              description:
                "Panguni Uththaram is an auspicious Tamil festival celebrated during the Tamil month of Panguni. It is associated with divine marriages, especially Lord Murugan and Deivanai, and symbolises sacred union and harmony. Devotees perform special abishegam, kavadi, and marriage-related prayers for family well-being and blessings."
            },
            {
              title: "Vinayagar Chaturthi",
              image: "/events/chaturthi.png",
              description:
                "Vinayaga Chathurthi celebrates the birth of Lord Ganesha, the remover of obstacles and the giver of wisdom and prosperity. Devotees install Ganesha idols, perform special poojas, offer modakam (His favourite sweet), and seek blessings for success and protection in life."
            },
            {
              title: "Navaratri Festival",
              image: "/events/navaratri.png",
              description:
                "Navaratri means “Nine Nights” and is a sacred Hindu festival dedicated to Goddess Durga and her divine forms. It celebrates the victory of good over evil and the power of divine feminine energy. Devotees observe prayers, fasting, music, dance (such as Garba and Kolu), and special poojas during these nine nights."
            }
          ].map((event, index) => (

            <div
              key={index}
              className="relative h-72 cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => toggleCard(index)}
            >
              <div
                className="relative w-full h-full duration-700 transition-transform"
                style={{
                  transformStyle: "preserve-3d",
                  WebkitTransformStyle: "preserve-3d",
                  transform: activeCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  willChange: "transform",
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full rounded-2xl shadow-xl flex flex-col justify-center items-center text-center bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                  <div className="relative z-10 px-6">
                    <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                    <button className="bg-amber-300 px-4 py-2 rounded-xl text-sm text-black font-semibold hover:bg-amber-400 transition">
                      Click to view details
                    </button>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full rounded-2xl shadow-xl p-6 flex flex-col justify-center text-center bg-orange-600 text-white"
                  style={{
                    transform: "rotateY(180deg)",
                    WebkitTransform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <p className="text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}