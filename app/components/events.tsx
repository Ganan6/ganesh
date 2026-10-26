import React from "react";

export default function Events() {
  const eventsData = [
    {
        title: "Diwali",
        date: "08th November 2026",
        expiry: "2026-11-08",
        image: "/events/uce5.png"
    },
    {
        title: "Ketharagowri Viratha Poorththi",
        date: "08th November 2026",
        expiry: "2026-11-08",
        image: "/events/uce4.png"
    },
    {
        title: "Kanthasashti Viratham",
        date: "9-15 November 2026",
        expiry: "2026-11-15",
        image: "/events/uce8.png"
    },
  ];
  
  const today = new Date();
    today.setHours(0, 0, 0, 0);
  const events = eventsData.filter(e => new Date(e.expiry) >= today);
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

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCentre = container.getBoundingClientRect().left + container.offsetWidth / 2;

    let nearest = 0;
    let smallest = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - containerCentre);
      if (distance < smallest) {
        smallest = distance;
        nearest = index;
      }
    });

    setCurrent(nearest);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Upcoming Events
      </h1>

      {/* Mobile Sized Carousel Container */}
      <div className="relative w-full flex items-center">
        
        {/* Left Arrow (Desktop Only) */}
        <button
          onClick={() => scrollToIndex((current - 1 + events.length) % events.length)}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-gray-700 shadow-md rounded-full p-3 hover:scale-110 transition-transform focus:outline-none"
          aria-label="Previous event"
        >
          &larr;
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none w-full py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-shadow hover:shadow-lg"
            >
              <div className="relative h-140 w-full bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-indigo-600 mb-1">{event.date}</p>
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow (Desktop Only) */}
        <button
          onClick={() => scrollToIndex((current + 1) % events.length)}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 text-gray-700 shadow-md rounded-full p-3 hover:scale-110 transition-transform focus:outline-none"
          aria-label="Next event"
        >
          &rarr;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-indigo-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
