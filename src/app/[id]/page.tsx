"use client";
import Button from "@/components/Button";
import DeleteTripModal from "@/components/DeleteTripModal";
import Toast from "@/components/Toast";
import TripDetailCard from "@/components/TripDetailCard";
import { TripType } from "@/types/TripType";
import React, { useState } from "react";

function TripDetailPage() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const onClickDelete = () => {
    setIsModal(true);
  };
  const trip: TripType = {
    id: "1",
    title: "일본 여행",
    location: "OSAKA",
    date: "2025-05-01",
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black h-30 w-full"></div>
      <div className="px-17 w-full flex items-center flex-col gap-5">
        <div className="w-full mt-5">
          <h1 className="font-bold">{trip.title}</h1>
          <div className="flex gap-3 text-sm items-center">
            <p>{trip.location}</p>
            <div className="border-l border-gray-300 h-3"></div>
            <p>{trip.date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <TripDetailCard
            title="plan"
            tripId="1"
            img="/assets/images/img_plan.png"
          />
          <TripDetailCard
            title="ready"
            tripId="1"
            img="/assets/images/img_ready.png"
          />
          <TripDetailCard
            title="expense"
            tripId="1"
            img="/assets/images/img_expense.png"
          />
          <TripDetailCard
            title="review"
            tripId="1"
            img="/assets/images/img_review.png"
          />
        </div>
        <Button text="Delete" width="w-20" onClick={onClickDelete} />
      </div>
      <Toast text="여행이 삭제되었습니다" />
      {isModal && <DeleteTripModal setIsModal={setIsModal} />}
    </div>
  );
}

export default TripDetailPage;
