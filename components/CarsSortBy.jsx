"use client";

import { sortCars } from "@/app/actions";
import React from "react";

const CarsSortBy = () => {
  return (
    <div className="flex justify-between my-16 max-xl:flex-col-reverse max-xl:gap-y-5 max-md:mt-10">
      <div>
        <p>Showing 1 – 12 of 15 results</p>
      </div>
      <div className="flex items-center gap-x-4 basis-1/3 max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
        <h3>Sort by</h3>
        <select defaultValue="defaultSort" className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full max-w-xs outline-none" onChange={(e) => sortCars(e.target.value)}>
          <option value="defaultSort">Default</option>
          <option value="newestSort">Newest</option>
          <option value="oldestSort">Oldest</option>
          <option value="lowestPriceSort">Lowest Price</option>
          <option value="highPriceSort">Highest Price</option>
        </select>
      </div>
    </div>
  );
};

export default CarsSortBy;
