import Image from "next/image";
import React from "react";

interface ToastType {
  text: string;
}

function Toast({ text }: ToastType) {
  return (
    <div className="fixed top-10 bg-primary-300 text-gray-600 font-bold rounded-xl p-2 z-20 flex left-1/2 -translate-x-1/2 text-[14px] justify-center items-center gap-1">
      <Image
        src="/assets/icons/ic_alert.png"
        alt="alert"
        width={16}
        height={16}
      />

      <p>{text}</p>
    </div>
  );
}

export default Toast;
