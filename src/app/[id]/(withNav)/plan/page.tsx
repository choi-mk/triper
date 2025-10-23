"use client";
import DropDown from "@/components/DropDown";
import TabTable from "@/components/TabTable";
import React, { useState } from "react";

function PlanPage() {
  const [current, setCurrent] = useState<string>("2025-01-01");
  return (
    <div className="flex items-center mt-5 flex-col">
      <DropDown
        list={["2025-01-01", "2025-01-02", "2025-01-03"]}
        current={current}
        setCurrent={setCurrent}
      />
      <TabTable categories={["교통", "숙박", "기타"]} />
    </div>
  );
}

export default PlanPage;
