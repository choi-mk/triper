import React from "react";

interface ButtonType {
  text: string;
  onClick?: () => void;
  isYes?: boolean;
  width?: string;
}
function Button({ text, onClick, isYes = true, width = "w-full" }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`${
        isYes
          ? "text-white bg-primary-100"
          : "text-primary-100 border-[1.3px] border-primary-100 bg-white"
      } px-2 py-2 rounded-lg text-sm h-8 flex justify-center items-center ${width}`}
    >
      {text}
    </button>
  );
}

export default Button;
