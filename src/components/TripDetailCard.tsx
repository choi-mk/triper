import Link from "next/link";
import React from "react";

interface TripDetailCardType {
  title: "review" | "plan" | "expense" | "ready";
  tripId: string;
}

function TripDetailCard({ title, tripId }: TripDetailCardType) {
  return (
    <Link href={`${tripId}/${title}`}>
      <div>{title}</div>
    </Link>
  );
}

export default TripDetailCard;
