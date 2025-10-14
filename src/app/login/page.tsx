import Button from "@/components/Button";
import InputText from "@/components/InputText";
import React from "react";

function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="my-15 flex flex-col gap-2 border-2 border-primary-50 rounded-xl p-3 w-50">
        <h1 className="text-primary-50 font-bold flex justify-center text-2xl font-bungee">
          Triper
        </h1>

        <form className="flex justify-center flex-col gap-2">
          <InputText text="EMAIL" placeholder="이메일을 입력해주세요" />
          <InputText
            text="PASSWORD"
            isPassword={true}
            placeholder="비밀번호를 입력해주세요"
          />
          <Button text="LOGIN" />
        </form>
      </div>
      {/* 하단에 디자인 추가 */}
    </div>
  );
}

export default LoginPage;
