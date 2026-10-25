"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Events from "../components/events";
import Calendar from "../components/calendar";
import events from "../components/events";
import FlipCard from "../components/flipCard";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6">
          General Events
        </h2>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Panguni Uththaram",
              image: "/events/panguni.png",
              description: "Panguni Uththaram is an auspicious Tamil festival celebrated during the Tamil month of Panguni. It is associated with divine marriages and symbolises sacred union and harmony. Devotees perform special abishegam, kavadi, and marriage-related prayers for family well-being and blessings."
            },
            {
              title: "Vinayagar Chaturthi",
              image: "/events/chaturthi.png",
              description: "Vinayaga Chathurthi celebrates the birth of Lord Ganesha, the remover of obstacles and the giver of wisdom and prosperity. We perform special poojas, offer modakam (His favourite sweet), and seek blessings for success and protection in life."
            },
            {
              title: "Navaratri Festival",
              image: "/events/navaratri.png",
              description: "Navaratri means “Nine Nights” and is a sacred Hindu festival dedicated to Goddess Durga and her divine forms. It celebrates the victory of good over evil and the power of divine feminine energy. Devotees can participate in prayers, fasting, bajan, dance and special poojas during these nine nights."
            },
            {
              title: "Maha Shivratri",
              image: "/events/shivratri.png",
              description: "A sacred Hindu festival dedicated to Lord Shiva, observed with night-long prayers, fasting, and meditation. Devotees seek spiritual growth, inner peace, and blessings by chanting and offering prayers throughout the night."
            },
            {
              title: "Tamil New Year",
              image: "/events/puthandu.png",
              description: "Celebrated as Puthandu, it marks the Tamil New Year and the beginning of a new calendar cycle. Families offer prayers, prepare festive meals, and welcome prosperity, happiness, and new beginnings."
            },
            {
              title: "Diwali",
              image: "/events/diwali.png",
              description: "The festival of lights, symbolising the victory of light over darkness and good over evil. Celebrated with lamps, prayers, sweets, and fireworks, it brings joy, prosperity, and togetherness among families and communities."
            },
            {
              title: "Kanthasashti",
              image: "/events/kanthashasti.jpg",
              description: "A Hindu fasting observance dedicated to Lord Murugan, traditionally observed for six days during the Tamil month of Aippasi. Devotees pray for courage, protection, good health and the removal of obstacles, commemorating Lord Murugan’s victory over the demon Soorapadman."
            },
            {
              title: "Sathyanarayana Pooja",
              image: "/events/satyanarayana.jpg",
              description: "A devotional worship dedicated to Lord Vishnu in his form as Sathyanarayana. Families perform the puja, listen to the sacred story and offer prasadam to express gratitude, seek blessings for prosperity and peace, and celebrate important milestones or auspicious occasions."
            },
            {
              title: "Ketharagowri Vrata",
              image: "/events/ketharagowri.jpeg",
              description: "A Hindu religious observance dedicated to Goddess Parvati and Lord Shiva. Devotees traditionally observe fasting and perform puja seeking marital harmony, family well-being and divine blessings. It is especially associated with Goddess Parvati’s devotion to Lord Shiva and is observed during the Tamil month of Aippasi."
            }

          ].map((event, index) => (
            <FlipCard
              key={index}
              title={event.title}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
        
      </section>

      <Footer />
    </div>
  );
}