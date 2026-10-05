import React from "react";

export default function Events() {
    const events = [
        {
          title: "Mahalaya Paksham Starts",
          date: "27 September 2026",
          image: "/events/uce7.png"
        },
        {
          title: "Navarathri & Vijayadasami",
          date: "11-20 October 2026",
          image: "/events/uce6.png"
        },
        {
          title: "Vijayadasami",
          date: "20 October 2026",
          image: "/events/uce9.png"
        },
        {
          title: "Diwali",
          date: "08th November 2026",
          image: "/events/uce5.png"
        },
        {
          title: "Ketharagowri Viratha Poorththi",
          date: "08th November 2026",
          image: "/events/uce4.png"
        },
        {
          title: "Kanthasashti Viratham",
          date: "9-15 November 2026",
          image: "/events/uce8.png"
        },
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

    // Keep the dots in sync when the user swipes (mobile) or scrolls (desktop):
    // pick whichever card sits closest to the centre of the viewport.
    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const containerCentre =
            container.getBoundingClientRect().left + container.offsetWidth / 2;

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
                    onScroll={handleScroll}
                    className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-6 md:px-16 pb-8 no-scrollbar"
                >
                    {events.map((event, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-80 rounded-2xl overflow-hidden opacity-100 bg-white shadow-xl"
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