"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Link from "next/link";
import React, { useState } from "react";

function SignupPage() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] =
    useState<boolean>(false);

  return (
    <div className="flex justify-center items-center">
      <div className="my-15 flex flex-col gap-2 border-2 border-primary-50 rounded-xl p-3 w-60">
        <h1 className="text-primary-50 font-bold flex justify-center text-2xl font-bungee">
          Triper
        </h1>

        <form className="flex justify-center flex-col gap-2">
          <InputText text="EMAIL" placeholder="이메일을 입력해주세요" />
          <InputText text="NICKNAME" placeholder="닉네임을 입력해주세요" />
          <InputText
            text="PASSWORD"
            isPassword={true}
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
            placeholder="비밀번호를 입력해주세요"
          />
          <InputText
            text="PSSWORD CONFIRM"
            isPassword={true}
            isShowPassword={isShowPasswordConfirm}
            setIsShowPassword={setIsShowPasswordConfirm}
            placeholder="비밀번호를 다시 한번 입력해주세요"
          />
          <Button text="SIGNUP" />
        </form>
        <div className="text-[8px] flex justify-center gap-1">
          <p>계정이 있으신가요?</p>
          <Link
            href="/login"
            className="text-primary-50 cursor-pointer underline font-bold"
          >
            로그인
          </Link>
        </div>
      </div>
      {/* 하단에 디자인 추가 */}
    </div>
  );
}

export default SignupPage;
