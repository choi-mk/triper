import React, { useState } from "react";
import InputText from "./InputText";
import Button from "./Button";
import Calendar from "./Callender";

interface AddTripModalType {
  setIsModal: (value: boolean) => void;
}

function AddTripModal({ setIsModal }: AddTripModalType) {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const onClickCancel = () => {
    setIsModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-3">
        <div className="flex flex-col gap-1">
          <InputText text="TITLE" value={title} setValue={setTitle} />
          <InputText text="LOCATION" value={location} setValue={setLocation} />
          <div className="relative" onClick={() => setIsCalendarOpen(true)}>
            <div className="flex gap-2">
              <InputText
                text="DEPARTURE DATE"
                value={departureDate}
                setValue={setDepartureDate}
              />
              <InputText
                text="ARRIVAL DATE"
                value={arrivalDate}
                setValue={setArrivalDate}
              />
            </div>
            {isCalendarOpen && (
              <Calendar
                setIsModalOpen={setIsCalendarOpen}
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
                arrivalDate={arrivalDate}
                setArrivalDate={setArrivalDate}
              />
            )}
          </div>
        </div>
        <div className="flex mt-4 justify-center gap-7">
          <Button
            text="CANCEL"
            isYes={false}
            width="w-20"
            onClick={onClickCancel}
          />
          <Button text="ADD" width="w-20" />
        </div>
      </div>
    </div>
  );
}

export default AddTripModal;
