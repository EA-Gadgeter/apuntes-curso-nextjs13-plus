"use client";

import { useAppSelector } from "@/store";

import { IoCartOutline } from "react-icons/io5";

import { SimpleWidget } from "@/components/dashboard/SimpleWidget";

export const WidgetGrid = () => {
  const { count } = useAppSelector(state => state.counterReducer);

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      <SimpleWidget 
        title={`${count}`}
        label="Contador"
        subtitle="Productos agregados"
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} className="text-blue-600"/>}
      />
      <SimpleWidget
        title={`${count}`}
      />
    </div>
  );
};
