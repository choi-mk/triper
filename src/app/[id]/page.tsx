"use client";
import Button from "@/components/Button";
import DeleteTripModal from "@/components/DeleteTripModal";
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
      <div className="px-2 w-full">
        <div className="">
          <h1>{trip.title}</h1>
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
      </div>
      <Button text="Delete" width="w-20" onClick={onClickDelete} />
      {isModal && <DeleteTripModal setIsModal={setIsModal} />}
    </div>
  );
}

export default TripDetailPage;
