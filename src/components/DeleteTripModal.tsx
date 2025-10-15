"use client";
import React from "react";
import InputText from "./InputText";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface DeleteTripModalType {
  setIsModal: (val: boolean) => void;
}

function DeleteTripModal({ setIsModal }: DeleteTripModalType) {
  const router = useRouter();
  const onClickCancel = () => {
    setIsModal(false);
  };
  const onClickDelete = () => {
    //여행 삭제
    router.push("/");
  };
  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-3 flex items-center flex-col gap-3 px-5">
        <p className="text-[12px] text-gray-600">
          여행을 정말 삭제하시겠습니까?
        </p>
        <InputText text="" placeholder="여행 이름을 다시 한번 입력해주세요" />
        <div className="flex gap-2">
          <Button text="CANCEL" isYes={false} onClick={onClickCancel} />
          <Button text="DELETE" onClick={onClickDelete} />
        </div>
      </div>
    </div>
  );
}

export default DeleteTripModal;
