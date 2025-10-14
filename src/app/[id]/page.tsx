import Button from "@/components/Button";
import DeleteTripModal from "@/components/DeleteTripModal";
import TripDetailCard from "@/components/TripDetailCard";
import React from "react";

function TripDetailPage() {
  return (
    <div>
      <TripDetailCard title="plan" tripId="1" />
      <Button text="여행 삭제" width="w-20" />
      <DeleteTripModal />
    </div>
  );
}

export default TripDetailPage;
