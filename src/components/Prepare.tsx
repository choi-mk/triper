import React from "react";
import CheckBox from "./CheckBox";

interface PrepareType {
  prep: string;
}
function Prepare({ prep }: PrepareType) {
  return (
    <div className="bg-primary-300 flex gap-3 px-2 rounded-sm items-center max-w-50">
      <CheckBox isChecked={true} />
      {prep}
    </div>
  );
}

export default Prepare;
