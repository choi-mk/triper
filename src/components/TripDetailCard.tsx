import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TripDetailCardType {
  title: "review" | "plan" | "expense" | "ready";
  tripId: string;
  img: string;
}

function TripDetailCard({ title, tripId, img }: TripDetailCardType) {
  return (
    <Link href={`${tripId}/${title}`}>
      <div className="bg-primary-400 w-30 rounded-2xl h-35 p-2 font-bungee text-primary-50">
        {title}
        <Image
          src={img}
          alt="image"
          className="mt-2 ml-3"
          width={80}
          height={80}
        />
      </div>
    </Link>
  );
}

export default TripDetailCard;
