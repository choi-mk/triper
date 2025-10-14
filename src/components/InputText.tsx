import React from "react";

interface InputTextType {
  text: string;
  isPassword?: boolean;
  placeholder?: string;
}

function InputText({
  text,
  isPassword = false,
  placeholder = "",
}: InputTextType) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="email" className="text-[10px] text-primary-100 font-bold">
        {text}
      </label>
      <input
        id={text}
        type={isPassword ? "password" : ""}
        className="border border-primary-200 rounded-sm py-[6px] pl-[6px] text-[10px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;
