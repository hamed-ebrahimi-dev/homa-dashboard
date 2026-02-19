"use client";

import { FC } from "react";
import moment from "moment-jalaali";

// تنظیم locale به فارسی
moment.loadPersian({ usePersianDigits: false, dialect: "persian-modern" });

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const getCurrentPersianDate = () => {
  const now = moment();
  const persianWeekDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];

  return {
    dayName: persianWeekDays[now.day()],
    day: now.jDate(),
    month: now.format("jMMMM"),
    year: now.jYear(),
  };
};

const generateCalendarDays = () => {
  const now = moment();
  const startOfMonth = now.clone().startOf("jMonth");
  const endOfMonth = now.clone().endOf("jMonth");
  const startOfCalendar = startOfMonth.clone().startOf("week");
  const endOfCalendar = endOfMonth.clone().endOf("week");

  const days = [];
  const current = startOfCalendar.clone();

  while (current.isSameOrBefore(endOfCalendar)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = current.clone();
      week.push({
        day: day.jDate(),
        isCurrentMonth: day.isSame(now, "jMonth" as any),
        isToday: day.isSame(now, "day"),
        isFriday: day.day() === 5,
        date: day,
      });
      current.add(1, "day");
    }
    days.push(week);
  }

  return days;
};

export const PersianCalendar: FC = () => {
  const currentDate = getCurrentPersianDate();
  const calendarDays = generateCalendarDays();

  return (
    <div className="bg-[#f9f9f9] flex flex-col gap-3 items-center justify-center px-3 py-4 rounded-xl w-[240px]">
      {/* Date Header */}
      <p className="font-normal text-sm leading-[1.6] text-[#363636] text-center w-full">
        {currentDate.dayName} {currentDate.day} {currentDate.month} {currentDate.year}
      </p>

      {/* Week Days */}
      <div className="flex font-normal gap-4 items-center justify-center text-[10px] leading-none text-[#6d6d6d] text-right w-full">
        {weekDays.map((day) => (
          <div key={day} className="flex flex-col justify-center">
            <p className="leading-[1.6]">{day}</p>
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="flex flex-col gap-1.5 items-center pt-1 px-2 rounded-xl w-full">
        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="flex gap-1.5 items-center justify-center w-full">
            {week.map((dayObj, dayIndex) => (
              <div
                key={dayIndex}
                className={`flex flex-col items-center justify-center rounded-full w-5 h-5 ${
                  dayObj.isToday ? "bg-[#dde5fe]" : ""
                }`}
              >
                <p
                  className={`font-normal text-[10px] leading-[1.6] text-center w-full ${
                    dayObj.isFriday && dayObj.isCurrentMonth
                      ? "text-[#ff2323]"
                      : !dayObj.isCurrentMonth
                        ? "text-[#a0a0a0]"
                        : "text-[#1b1b1b]"
                  }`}
                >
                  {dayObj.day}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
