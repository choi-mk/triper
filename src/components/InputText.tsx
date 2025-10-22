import Image from "next/image";
import React from "react";

interface InputTextType {
  text: string;
  isPassword?: boolean;
  placeholder?: string;
  isShowPassword?: boolean;
  setIsShowPassword?: (v: boolean) => void;
}

function InputText({
  text,
  isPassword = false,
  placeholder = "",
  isShowPassword,
  setIsShowPassword = () => {},
}: InputTextType) {
  const handleChangeShow = (value: boolean) => {
    setIsShowPassword(value);
  };
  return (
    <div className="flex flex-col w-full relative">
      <label
        htmlFor="email"
        className="text-[10px] text-primary-100 font-bungee"
      >
        {text}
      </label>
      <input
        id={text}
        type={isShowPassword ? "" : "password"}
        className="border border-primary-200 rounded-sm py-[6px] pl-[6px] text-[10px]"
        placeholder={placeholder}
      ></input>
      {isPassword &&
        (isShowPassword ? (
          <Image
            src="/assets/icons/ic_eye_close.png"
            width={20}
            height={20}
            alt="unshow password"
            className="absolute top-5 right-1"
            onClick={() => handleChangeShow(false)}
          />
        ) : (
          <Image
            src="/assets/icons/ic_eye_open.png"
            width={20}
            height={20}
            alt="show password"
            className="absolute top-5 right-1"
            onClick={() => handleChangeShow(true)}
          />
        ))}
    </div>
  );
}

export default InputText;
