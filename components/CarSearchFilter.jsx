"use client";

import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const CarSearchFilter = ({ carsList, setCarsList }) => {

const [transmissionSelect, setTransmissionSelect] = useState();

  const filterCars = (e) => {
    setCarsList(carsList.filter(car => car.transmission === transmissionSelect));
  }

  return (
    <div className="bg-gray-800 h-36 w-full text-white py-5 px-5 max-sm:h-72">
      <h3 className="flex items-center justify-center gap-x-2 font-medium text-2xl">
        <FaCar className="text-3xl" />
        Search Inventory
      </h3>
      <div className="flex justify-center gap-x-5 mt-3 max-sm:flex-col max-sm:gap-y-2">
        <select className="select select-bordered w-full max-w-xs text-black max-sm:max-w-full" value={transmissionSelect} onChange={(e) => setTransmissionSelect(e.target.value)}>
          <option disabled>
            Transmission
          </option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>

        <select className="select select-bordered w-full max-w-xs text-black max-sm:max-w-full">
          <option disabled>
            Make
          </option>
          <option>Acura</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Chevrolet</option>
        </select>

        <select className="select select-bordered w-full max-w-xs text-black max-sm:max-w-full">
          <option disabled>
            Make
          </option>
          <option>Acura</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Chevrolet</option>
        </select>
        
        <button onClick={filterCars} className="text-white bg-red-700 font-medium flex items-center justify-center gap-x-2 px-5 text-lg max-sm:py-2 hover:bg-red-600"><IoIosSearch className="text-2xl" />Search</button>
      </div>
    </div>
  );
};

export default CarSearchFilter;
