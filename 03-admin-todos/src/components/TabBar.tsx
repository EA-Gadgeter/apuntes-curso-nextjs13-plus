"use client";

import { useState, FC } from "react";

import { setCookie } from "cookies-next";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar: FC<Props> = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (newSelectedTab: number) => {
    setSelected(newSelectedTab);
    setCookie("selectedTab", newSelectedTab.toString());
  };

  return (
    <div className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
      {
        tabOptions.map(opt => (
          <div key={opt}>
            <input type="radio" id={`${opt}`} className="peer hidden" checked={selected === opt} onChange={() => {}}/>
            <label
              className="transition-all duration-150 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              onClick={() => onTabSelected(opt)}
            >
              {opt}
            </label>
          </div>
        ))
      }
    </div>
  );
};