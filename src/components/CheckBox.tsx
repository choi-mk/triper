"use client";
import Image from "next/image";
import React from "react";

interface CheckBoxType {
  isChecked: boolean;
}

function CheckBox({ isChecked }: CheckBoxType) {
  const onClickCheck = () => {
    isChecked = !isChecked;
  };
  return (
    <div
      className={`border border-primary-50 w-3 h-3 rounded-xs flex items-center justify-center ${
        isChecked ? "bg-primary-100" : ""
      }`}
      onClick={onClickCheck}
    >
      {isChecked && (
        <Image
          src="/assets/icons/icon_check.png"
          width={9}
          height={9}
          alt="check"
        />
      )}
    </div>
  );
}

export default CheckBox;
