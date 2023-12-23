"use client";
import { useEffect } from "react";


import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne, initCounterState } from "@/store/counter/counterSlice";

interface Props {
  value: number;
}

interface CounterResonse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResonse> => {
  const dataCounter: CounterResonse = await fetch("/api/counter")
    .then(res => res.json());
  
  return dataCounter;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const { count } = useAppSelector(state => state.counterReducer);
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]); */

  useEffect(() => {
    getApiCounter()
      .then(data => dispatch(initCounterState(data.count)));
  }, [dispatch]);
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>

        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </> 
  );
};
