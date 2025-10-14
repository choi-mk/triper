import React from "react";
import InputText from "./InputText";
import Button from "./Button";

interface AddTripModalType {
  setIsModal: (value: boolean) => void;
}

function AddTripModal({ setIsModal }: AddTripModalType) {
  const onClickCancel = () => {
    setIsModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center">
      <div className="bg-white w-60 rounded-2xl p-3">
        <div className="flex flex-col gap-1">
          <InputText text="TITLE" />
          <InputText text="LOCATION" />
          <InputText text="DATE" />
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
