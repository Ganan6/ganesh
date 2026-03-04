import React from "react";

export default function Events() {
    const events = [
        {
          title: "Ugadi",
          date: "19th March 2026",
          image: "/events/uce1.png"
        },
        {
          title: "Panguni Uththaram",
          date: "1st April 2026",
          image: "/events/uce2.png"
        },
        {
          title: "Tamil New Year",
          date: "14th April 2026",
          image: "/events/uce3.png"
        },
        {
          title: "Chithra Paurnami & Satyanaraya Pooja",
          date: "1st May 2026",
          image: "/events/uce4.png"
        }
        
    ];
    
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

    return (
        <div className="flex flex-col items-center py-8 px-4">

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Upcoming Events
            </h1>

            {/* Mobile Sized Carousel Container */}
            <div className="relative w-full">

                {/* Left Arrow (Desktop Only) */}
                <button
                    onClick={() => scrollToIndex((current - 1 + events.length) % events.length)}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
                >
                    ◀
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-6 md:px-16 pb-8 no-scrollbar"
                >
                    {events.map((event, index) => (
                    <div
                        key={index}
                        className={`snap-center shrink-0 w-80 rounded-2xl overflow-hidden transition-all duration-500 ${
                        current === index
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-80"
                        } bg-white shadow-xl`}
                    >
                        <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-[510px] object-cover"
                        />

                        <div className="p-4 text-left">
                        <h2 className="text-xl font-semibold text-orange-600">
                            {event.title}
                        </h2>
                        <p className="text-md font-semibold text-black mb-2">
                            {event.date}
                        </p>

                        </div>
                    </div>
                    ))}
                </div>

                {/* Right Arrow (Desktop Only) */}
                <button
                    onClick={() => scrollToIndex((current + 1) % events.length)}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
                >
                    ▶
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all ${
                        current === index
                            ? "bg-orange-600 scale-125"
                            : "bg-gray-400"
                        }`}
                    />
                    ))}
                </div>

            </div>
        </div>
    );
}