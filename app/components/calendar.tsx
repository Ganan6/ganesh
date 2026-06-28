"use client";

import { useState } from "react";

type EventType = {
  date: string; // format: YYYY-MM-DD
  title: string;
};

const events: EventType[] = [
  {
    date: "2026-06-01",
    title: "Ganapathi Homam",
  },
  {
    date: "2026-06-03",
    title: "Deepa Pooja",
  },
  {
    date: "2026-06-04",
    title: "Navagraha Homam & Oil Annointing",
  },
  {
    date: "2026-06-05",
    title: "Thravya Homam & Oil Annointing",
  },
  {
    date: "2026-06-06",
    title: "Thravya Homam & Oil Annointing",
  },
  {
    date: "2026-06-07",
    title: "Maha Kumbabishekam",
  },
  {
    date: "2026-05-31",
    title: "Last day of Yantra Pooja",
  },
  {
    date: "2026-04-17",
    title: "Yantra Pooja Begins",
  },
  {
    date: "2026-06-22",
    title: "Aani Uththaram",
  },
  {
    date: "2026-06-29",
    title: "Sathya Narayana Pooja",
  },
  {
    date: "2026-07-21",
    title: "Mandala Poorththi",
  },
  {
    date: "2026-06-22",
    title: "Mandala Poorththi",
  },
  {
    date: "2026-07-23",
    title: "Shanthi - Day before Grand Festival",
  },
  {
    date: "2026-07-24",
    title: "Flag Hoisting",
  },
  {
    date: "2026-07-25",
    title: "Dheepa Pooja \n Lakshmi Ganapathy",
  },
  {
    date: "2026-07-26",
    title: "Shiva Pooja Ganapathy",
  },
  {
    date: "2026-07-27",
    title: "Mayuresha Ganapathy",
  },
  {
    date: "2026-07-28",
    title: "Bhakthamukthi Ganapathy",
  },
  {
    date: "2026-07-29",
    title: "Vasantha Utsavam",
  },
  {
    date: "2026-07-30",
    title: "Vettai Thiruvizha",
  },
  {
    date: "2026-07-31",
    title: "Sappara Thiruvizha",
  },
  {
    date: "2026-08-01",
    title: "Chariot Festival",
  },
  {
    date: "2026-08-02",
    title: "Theertha Utsavam",
  },
  {
    date: "2026-08-03",
    title: "Thirukalyanam \n Holy Wedding",
  },
  {
    date: "2026-08-04",
    title: "Bhairavar Festival",
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
                <h2 className="font-semibold text-blue-600 text-2xl whitespace-pre-line">
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