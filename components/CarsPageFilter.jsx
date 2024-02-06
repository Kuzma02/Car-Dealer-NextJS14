import { filterCars } from "@/app/actions";
import React from "react";

const CarsPageFilter = () => {
  return (
    <form className="flex gap-x-5 mt-5 max-md:flex-wrap max-md:gap-y-5" action={filterCars}>
      <select defaultValue="all" className="select border-2 border-gray-400 px-2 outline-none w-full max-w-xs" name="conditions">
        <option value="all">
          All Conditions
        </option>
        <option value="conditionNew">New</option>
        <option value="conditionUsed">Used</option>
      </select>

      <select defaultValue="all" className="select border-2 border-gray-400 px-2 w-full max-w-xs" name="models">
        <option value="all">
          All Models
        </option>
        <option value="modelAudi">Audi</option>
        <option value="modelBentley">Bentley</option>
        <option value="modelBMW">BMW</option>
        <option value="modelFord">Ford</option>
        <option value="modelMercedes">Mercedes Benz</option>
        <option value="modelNissan">Nissan</option>
        <option value="modelPeugeot">Peugeot</option>
        <option value="modelPorsche">Porsche</option>
        <option value="modelToyota">Toyota</option>
        <option value="modelVolkswagen">Volkswagen</option>
      </select>

      <select defaultValue="all" className="select border-2 border-gray-400 px-2 w-full max-w-xs" name="fuels">
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
