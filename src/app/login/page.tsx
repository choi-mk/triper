import Button from "@/components/Button";
import InputText from "@/components/InputText";
import React from "react";

function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="my-15 flex flex-col gap-2 border border-primary-100 rounded-xl p-3">
        <h1 className="text-primary-100 font-bold flex justify-center text-2xl font-bungee">
          Triper
        </h1>

        <form className="flex justify-center flex-col gap-2 ">
          <InputText text="EMAIL" />
          <InputText text="PASSWORD" isPassword={true} />
          <Button text="LOGIN" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
