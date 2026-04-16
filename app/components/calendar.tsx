"use client";

import { useState } from "react";

type EventType = {
  date: string; // format: YYYY-MM-DD
  title: string;
};

const events: EventType[] = [
  {
    date: "2026-03-19",
    title: "Ugadi",
  },
  {
    date: "2026-03-26",
    title: "Rama Navami",
  },
  {
    date: "2026-04-01",
    title: "Panguni Uththaram",
  },
  {
    date: "2026-04-14",
    title: "Tamil New Year",
  },
  {
    date: "2026-05-01",
    title: "Chithra Pournami",
  },
  {
    date: "2026-05-01",
    title: "Satyanaraya Pooja",
  },
  {
    date: "2026-04-17",
    title: "Yantra Pooja Begins",
  },
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const eventDates = events.map((e) => e.date);

  const generateCalendar = () => {
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={"empty-" + i}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const hasEvent = eventDates.includes(formattedDate);

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(formattedDate)}
          className={`relative cursor-pointer p-3 rounded-xl text-center hover:bg-orange-100 transition ${
            selectedDate === formattedDate ? "bg-orange-200" : ""
          }`}
        >
          {day}

          {hasEvent && (
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-600 rounded-full"></span>
          )}
        </div>
      );
    }

    return days;
  };

  const selectedEvents = events.filter((e) => e.date === selectedDate);

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-2xl shadow-xl">

      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        Temple Calendar
      </h2>

      <div className="flex justify-between items-center mb-4">
        <button
            onClick={() =>
            setCurrentDate(new Date(year, month - 1, 1))
            }
            className="px-3 py-1 bg-orange-100 rounded-lg text-black text-xl"
        >
            ←
        </button>

        <h3 className="font-semibold text-lg text-black">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h3>

        <button
            onClick={() =>
            setCurrentDate(new Date(year, month + 1, 1))
            }
            className="px-3 py-1 bg-orange-100 rounded-lg text-black text-xl"
        >
            →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm font-semibold text-black mb-2 text-center">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-black">
        {generateCalendar()}
      </div>

      {selectedDate && (
        <div className="mt-6 border-t pt-4">
          {selectedEvents.length > 0 ? (
            selectedEvents.map((event, i) => (
              <div key={i} className="mb-3">
                <h2 className="font-semibold text-blue-600 text-2xl">
                  {event.title}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-black text-sm">
              No events on this date.
            </p>
          )}
        </div>
      )}

    </div>
  );
}