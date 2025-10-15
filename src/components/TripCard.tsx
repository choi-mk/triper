import { TripType } from "@/types/TripType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TripCardType {
  trip: TripType;
}

function TripCard({ trip }: TripCardType) {
  return (
    <Link href={`/1`}>
      <div className="max-w-30 border border-primary-50 rounded-2xl p-2 bg-primary-400">
        <div className="bg-black h-15 w-full"></div>
        <div>
          <p>{trip.title}</p>
          <div className="flex items-center">
            <Image
              alt="location"
              src="/assets/icons/icon_location.png"
              width={17}
              height={4}
              className="w-3 h-3"
            />
            <p className="font-bold text-sm text-primary-50">{trip.location}</p>
          </div>
          <p className="text-gray-400 text-[10px]">{trip.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default TripCard;
