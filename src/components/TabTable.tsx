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
    <div className="w-full  max-w-100">
      <div className="flex ">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-primary-400 h-5 w-10 flex items-center justify-center text-sm border-r border-t border-primary-100"
            onClick={() => onClickChangeTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="bg-primary-400 h-25 w-full px-3 flex justify-center items-center">
        <div className="bg-secondary h-20 w-full"></div>
      </div>
    </div>
  );
}

export default TabTable;
