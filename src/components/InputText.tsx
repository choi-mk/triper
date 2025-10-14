import React from "react";

interface InputTextType {
  text: string;
  isPassword?: boolean;
}

function InputText({ text, isPassword = false }: InputTextType) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="text-[10px] text-primary-100 font-bold">
        {text}
      </label>
      <input
        id={text}
        type={isPassword ? "password" : ""}
        className="border border-primary-200 rounded-sm"
      />
    </div>
  );
}

export default InputText;
