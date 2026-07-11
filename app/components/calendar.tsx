"use client";

import { useState } from "react";

type EventType = {
  date: string;
  title: string;
};

const events: EventType[] = [
  { date: "2026-06-01", title: "Ganapathi Homam" },
  { date: "2026-06-03", title: "Deepa Pooja" },
  { date: "2026-06-04", title: "Navagraha Homam & Oil Annointing" },
  { date: "2026-06-05", title: "Thravya Homam & Oil Annointing" },
  { date: "2026-06-06", title: "Thravya Homam & Oil Annointing" },
  { date: "2026-06-07", title: "Maha Kumbabishekam" },
  { date: "2026-05-31", title: "Last day of Yantra Pooja" },
  { date: "2026-04-17", title: "Yantra Pooja Begins" },
  { date: "2026-06-22", title: "Aani Uththaram" },
  { date: "2026-06-29", title: "Sathya Narayana Pooja" },
  { date: "2026-07-21", title: "Mandala Poorththi" },
  { date: "2026-07-22", title: "Mandala Poorththi" },
  { date: "2026-07-23", title: "Shanthi - Day before Grand Festival" },
  { date: "2026-07-24", title: "Flag Hoisting" },
  { date: "2026-07-25", title: "Dheepa Pooja\nLakshmi Ganapathy" },
  { date: "2026-07-26", title: "Shiva Pooja Ganapathy" },
  { date: "2026-07-27", title: "Mayuresha Ganapathy" },
  { date: "2026-07-28", title: "Bhakthamukthi Ganapathy" },
  { date: "2026-07-29", title: "Vasantha Utsavam" },
  { date: "2026-07-30", title: "Vettai Thiruvizha" },
  { date: "2026-07-31", title: "Sappara Thiruvizha" },
  { date: "2026-08-01", title: "Chariot Festival" },
  { date: "2026-08-02", title: "Theertha Utsavam" },
  { date: "2026-08-03", title: "Thirukalyanam\nHoly Wedding" },
  { date: "2026-08-04", title: "Bhairavar Festival" },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonthDays = new Date(year, month, 0).getDate();

  const getEvents = (date: string) =>
    events.filter((event) => event.date === date);

  const calendarCells = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarCells.push({
      day: previousMonthDays - i,
      currentMonth: false,
      date: "",
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    calendarCells.push({
      day,
      currentMonth: true,
      date,
    });
  }

  while (calendarCells.length % 7 !== 0) {
    calendarCells.push({
      day: calendarCells.length - firstDay - daysInMonth + 1,
      currentMonth: false,
      date: "",
    });
  }

  return (
    <section className="w-full max-w-7xl mx-auto my-6 px-2 md:px-6">
      <div className="overflow-hidden rounded-3xl border border-orange-200 bg-orange-50 shadow-lg">
        <div className="flex items-center justify-between border-b border-orange-200 bg-white px-4 py-5 md:px-8">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-800 transition hover:bg-orange-200"
          >
            ←
          </button>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Temple Calendar
            </p>

            <h2 className="mt-1 text-2xl font-bold text-orange-950 md:text-3xl">
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {year}
            </h2>
          </div>

          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-800 transition hover:bg-orange-200"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 border-b border-orange-200 bg-orange-100 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="border-r border-orange-200 px-1 py-3 text-xs font-bold uppercase tracking-wide text-orange-900 last:border-r-0 md:text-sm"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 bg-orange-200 gap-px">
          {calendarCells.map((cell, index) => {
            const dayEvents = cell.date ? getEvents(cell.date) : [];

            return (
              <div
                key={`${cell.day}-${index}`}
                className={`relative min-h-28 bg-orange-50 p-2 transition md:min-h-40 md:p-4 ${
                  !cell.currentMonth
                    ? "bg-orange-50/50 text-orange-300"
                    : "text-orange-950 hover:bg-orange-100"
                }`}
              >
                <div
                  className={`text-lg font-bold md:text-3xl ${
                    dayEvents.length > 0 ? "text-orange-900" : ""
                  }`}
                >
                  {cell.day}
                </div>

                {dayEvents.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {dayEvents.map((event, eventIndex) => (
                      <p
                        key={eventIndex}
                        className="whitespace-pre-line text-center md:text-[14px] text-[8px] font-semibold leading-tight text-red-700 md:text-sm"
                      >
                        {event.title}
                      </p>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}