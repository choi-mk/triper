"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Link from "next/link";
import React, { useState } from "react";

function LoginPage() {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex justify-center items-center">
      <div className="my-15 flex flex-col gap-2 border-2 border-primary-50 rounded-xl p-3 w-60">
        <h1 className="text-primary-50 font-bold flex justify-center text-2xl font-bungee">
          Triper
        </h1>

        <form className="flex justify-center flex-col gap-2">
          <InputText
            text="EMAIL"
            placeholder="이메일을 입력해주세요"
            value={email}
            setValue={setEmail}
          />
          <InputText
            text="PASSWORD"
            isPassword={true}
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            setValue={setPassword}
          />
          <Button text="LOGIN" />
        </form>
        <div className="text-[8px] flex justify-center gap-1">
          <p>계정이 없으신가요?</p>
          <Link
            href="/signup"
            className="text-primary-50 cursor-pointer underline font-bold"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
