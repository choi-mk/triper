"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import Button from "./Button";

interface CalendarType {
  departureDate: string;
  setDepartureDate: (value: string) => void;
  arrivalDate: string;
  setArrivalDate: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
}

function Calendar({
  departureDate,
  setDepartureDate,
  arrivalDate,
  setArrivalDate,
  setIsModalOpen,
}: CalendarType) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();
  const today = dayjs();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const daysArray = [];
  for (let i = 0; i < startDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  const handleChooseDate = (date: string) => {
    const chosen = dayjs(date, "YYYY. MM. DD");

    // 아직 아무것도 선택 안 했을 때
    if (departureDate === "" && arrivalDate === "") {
      setDepartureDate(date);
      return;
    }

    // 출발일만 있고 도착일 아직 없을 때
    if (arrivalDate === "") {
      const dep = dayjs(departureDate, "YYYY. MM. DD");
      if (chosen.isBefore(dep, "day")) {
        // 선택한 날짜가 출발일보다 이전이면 출발일만 변경
        setDepartureDate(date);
      } else {
        // 이후 날짜면 도착일로 설정
        setArrivalDate(date);
      }
      return;
    }

    // 이미 둘 다 선택되어 있으면 새 출발일로 갱신
    setDepartureDate(date);
    setArrivalDate("");
  };

  const handleConfirmDate = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (departureDate !== "" && arrivalDate !== "") {
      e?.stopPropagation();
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-58 bg-white rounded-2xl shadow p-2 absolute top-12">
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center">
        <button onClick={prevMonth} className="text-primary-50">
          ◀
        </button>
        <h2 className="font-bold text-primary-50 font-bungee text-sm">
          {currentDate.format("YYYY. MM")}
        </h2>
        <button onClick={nextMonth} className="text-primary-50">
          ▶
        </button>
      </div>

      {/* 요일 */}
      <div className="grid grid-cols-7 text-center text-[10px] font-semibold font-bungee">
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
      <div className="grid grid-cols-7 text-center text-[10px] font-bold gap-1">
        {daysArray.map((day, idx) =>
          day ? (
            <div
              onClick={() =>
                handleChooseDate(currentDate.date(day).format("YYYY. MM. DD"))
              }
              key={idx}
              className={`w-7 h-7 rounded-full cursor-pointer hover:bg-primary-400 flex justify-center items-center
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
      <Button text="COMPLETE" onClick={(e) => handleConfirmDate(e)} />
    </div>
  );
}

export default Calendar;
