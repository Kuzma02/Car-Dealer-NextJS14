import React from "react";

const CarsPageFilter = () => {
  return (
    <div className="flex gap-x-5 mt-5 max-md:flex-wrap max-md:gap-y-5">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Condition
        </option>
        <option>New</option>
        <option>Used</option>
      </select>

      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Category
        </option>
        <option>New</option>
        <option>Used</option>
      </select>

      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Type
        </option>
        <option>New</option>
        <option>Used</option>
      </select>

      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Any Makes
        </option>
        <option>New</option>
        <option>Used</option>
      </select>

      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Any Models
        </option>
        <option>New</option>
        <option>Used</option>
      </select>
    </div>
    
  );
};

export default CarsPageFilter;
