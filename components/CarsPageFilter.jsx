import { filterAndSortCars } from "@/app/actions";
import React from "react";

const CarsPageFilter = ({carsNumber}) => {
  return (
    <form
      className="flex flex-col gap-x-5 mt-5 max-xl:flex-wrap gap-y-5"
      action={filterAndSortCars}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-xl">Filter by</h3>
        <select
          defaultValue="all"
          className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full outline-none"
          name="conditions"
        >
          <option value="all">All Conditions</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>

        <select
          defaultValue="all"
          className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full outline-none"
          name="transmissions"
        >
          <option value="all">All Transmissions</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
          <option value="cvt">CVT</option>
        </select>

        <select
          defaultValue="all"
          className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full outline-none"
          name="fuels"
        >
          <option value="all">All Fuel Types</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
        </select>
      </div>

      <div className="flex-col justify-between max-xl:flex-col-reverse max-xl:gap-y-5 max-md:mt-10">
        

        <div>
          <h3 className="text-xl">Sort by</h3>
          <select
            defaultValue="defaultSort"
            className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full outline-none"
            name="sort"
          >
            <option value="defaultSort">Default</option>
            <option value="newestSort">Newest</option>
            <option value="oldestSort">Oldest</option>
            <option value="lowestPriceSort">Lowest Price</option>
            <option value="highPriceSort">Highest Price</option>
          </select>
        </div>
      </div>
      <button type="submit" className="bg-red-700 text-white font-bold w-full py-3 rounded-lg hover:bg-red-600">
        Filter And Sort Cars
      </button>
      <div>
          <p className="pt-5 text-xl">Showing 1 – 12 of {carsNumber} results</p>
        </div>
    </form>
  );
};

export default CarsPageFilter;
