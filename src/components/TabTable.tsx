"use client";
import React, { useState } from "react";

interface TabTableType {
  categories: string[];
}

function TabTable({ categories }: TabTableType) {
  const [currentCategory, setCurrentCategory] = useState<string>(categories[0]);
  const onClickChangeTab = (category: string) => {
    setCurrentCategory(category);
  };
  return (
    <div className="w-full max-w-100">
      <div className="flex ">
        {categories.map((category, idx) => (
          <div
            key={category}
            className={`bg-primary-400 h-5 w-10 flex items-center justify-center text-sm border-y-2 border-primary-100 ${
              idx === 0 ? "rounded-tl-sm border-x-2" : "border-r-2"
            } ${idx === categories.length - 1 ? "rounded-tr-sm" : ""}`}
            onClick={() => onClickChangeTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="bg-primary-400 h-25 w-full px-3 flex justify-center items-center rounded-r-xl rounded-bl-lg">
        <div className="bg-secondary h-20 w-full rounded-xl"></div>
      </div>
    </div>
  );
}

export default TabTable;
