import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner-image h-[600px] bg-no-repeat bg-cover bg-center relative max-sm:h-[400px]">
      <div className="w-full h-full bg-black opacity-50 absolute z-0"></div>
      <div className="text-white flex flex-col justify-center items-center h-full">
        <div className="absolute z-10 text-center">
          <h2 className="text-6xl font-bold max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">Mercedes-Benz AMG GT 2017</h2>
          <h4 className="text-orange-400 font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            $320/MO ONLY AT MR. CAR
          </h4>
          <button className="text-center bg-red-700 font-bold px-20 py-3 rounded-lg mt-2 hover:bg-red-600 max-md:px-10 max-md:py-2 max-sm:px-7 max-sm:py-1">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
