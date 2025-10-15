import React from "react";
import Button from "./Button";
import Link from "next/link";

function NavBar() {
  const id = "1";
  return (
    <div className="h-12 border-b border-gray-200 flex justify-between items-center p-2">
      <Link href="/">
        <p className="font-bungee text-primary-50 text-xl">TRIPER</p>
      </Link>
      <div className="flex gap-3 text-primary-100 font-bungee">
        <Link href="plan">PLAN</Link>
        <Link href="ready">READY</Link>
        <Link href="expense">EXPENSE</Link>
        <Link href="review">REVIEW</Link>
      </div>
      <Button text="LOGOUT" width="w-20" />
    </div>
  );
}

export default NavBar;
