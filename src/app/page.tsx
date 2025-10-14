"use client";

import AddTripModal from "@/components/AddTripModal";
import Button from "@/components/Button";
import TripCard from "@/components/TripCard";
import { TripType } from "@/types/TripType";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const trips: TripType[] = [
    { id: "1", date: "2025-01-09", title: "일본 여행", location: "OSAKA" },
  ];
  const [isModal, setIsModal] = useState<boolean>(false);
  const onClickAdd = () => {
    setIsModal(true);
  };
  return (
    <div className="">
      <div className="bg-black w-full h-30"></div>
      <div className="m-5 flex flex-col gap-3">
        <div className="flex gap-5">
          <h1 className="font-bungee text-primary-50 text-lg">MY TRIP</h1>
          <Button text="+" onClick={onClickAdd} width="w-18" />
        </div>
        <div>
          {trips.map((trip) => (
            <TripCard trip={trip} key={trip.id} />
          ))}
        </div>
      </div>
      {isModal && <AddTripModal setIsModal={setIsModal} />}
    </div>
  );
}
