import { filterCars } from "@/app/actions";
import React from "react";

const CarsPageFilter = () => {
  return (
    <form className="flex gap-x-5 mt-5 max-xl:flex-wrap max-md:gap-y-5" action={filterCars}>
      <select defaultValue="all" className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full max-w-xs outline-none" name="conditions">
        <option value="all">
          All Conditions
        </option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>

      <select defaultValue="all" className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full max-w-xs outline-none" name="transmissions">
        <option value="all">
          All Transmissions
        </option>
        <option value="manual">Manual</option>
        <option value="automatic">Automatic</option>
        <option value="cvt">CVT</option>
      </select>

      <select defaultValue="all" className="select border-gray-400 py-2 px-2 border-2 select-bordered w-full max-w-xs outline-none" name="fuels">
        <option value="all">
          All Fuel Types
        </option>
        <option value="electric">Electric</option>
        <option value="hybrid">Hybrid</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
      </select>



      <button className="bg-red-700 text-white font-bold w-[200px] py-3 rounded-lg hover:bg-red-600">Filter Cars</button>
    </form>
    
  );
};

export default CarsPageFilter;
