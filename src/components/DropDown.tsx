import React from "react";

interface DropDownType {
  list: string[];
  current: string;
  setCurrent: (value: string) => void;
}

function DropDown({ list, current, setCurrent }: DropDownType) {
  return (
    <div>
      <div className="border border-primary-50 rounded-sm h-5 flex items-center text-sm p-3 max-w-30">
        <p>{current}</p>
        <div className="bg-primary-100"></div>
      </div>
    </div>
  );
}

export default DropDown;
