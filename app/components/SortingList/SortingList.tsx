"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";

import ListItem from "@/app/components/SortingList/ListItem/ListItem";

const algorithms = [
    "Bubble Sort",
    "Quick Sort",
    "Test Sort",
    "Fake Sort",
    "Real Sort"
]

export const SortingList = () => {

  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
      {algorithms.map((title) => (
          <ListItem title={title} />
        ))}
        
      </div>
    </div>
  );
};
