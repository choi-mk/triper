"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import Button from "./Button";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();
  const today = dayjs();
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const daysArray = [];
  for (let i = 0; i < startDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  const handleChooseTrip = () => {
    if (departureDate === "" && arrivalDate === "") {
    }
  };

  return (
    <div className="w-[320px] bg-white rounded-2xl shadow p-4">
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center mb-3">
        <button onClick={prevMonth} className="text-primary-50">
          ◀
        </button>
        <h2 className="font-bold text-primary-50 font-bungee">
          {currentDate.format("YYYY. MM")}
        </h2>
        <button onClick={nextMonth} className="text-primary-50">
          ▶
        </button>
      </div>

      {/* 요일 */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold mb-2 font-bungee">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div
            key={d}
            className="text-primary-200 w-8 h-8 flex justify-center items-center"
          >
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="grid grid-cols-7 text-center gap-y-2 text-sm">
        {daysArray.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={`w-8 h-8 rounded-full cursor-pointer hover:bg-primary-400 flex justify-center items-center
               ${
                 today.isSame(currentDate.date(day), "day")
                   ? "bg-primary-100 text-white" // 오늘 날짜
                   : today.isAfter(currentDate.date(day), "day")
                   ? "text-gray-300" // 오늘 이전 날짜
                   : "hover:bg-primary-400" // 그 외 (미래 날짜)
               }`}
            >
              {day}
            </div>
          ) : (
            <div key={idx}></div>
          )
        )}
      </div>
      <Button text="COMPLETE" />
    </div>
  );
}

export default Calendar;
