import TabTable from "@/components/TabTable";
import React from "react";

function PlanPage() {
  return (
    <div className="flex justify-center mt-5">
      <TabTable categories={["교통", "숙박", "기타"]} />
    </div>
  );
}

export default PlanPage;
