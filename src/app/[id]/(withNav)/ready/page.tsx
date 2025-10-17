import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Prepare from "@/components/Prepare";
import React from "react";

function ReadyPage() {
  const prepare = ["칫솔치약"];
  return (
    <div className="px-10 py-5 flex gap-5 justify-center">
      <div className="w-full">
        <div className="flex justify-between">
          <h2>준비물</h2>
          <Button text="add" width="w-20" />
        </div>
        {prepare.map((prep) => (
          <Prepare prep={prep} key={prep} />
        ))}
      </div>
      <div>
        <h2>ToDo</h2>
      </div>
    </div>
  );
}

export default ReadyPage;
