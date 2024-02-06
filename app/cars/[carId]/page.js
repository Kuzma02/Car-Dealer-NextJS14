import CustomBadge from "@/components/CustomBadge";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import Image from "next/image";
import React from "react";

const singleCarFetch = async (id) => {
  const data = await fetch(`http://localhost:1337/api/cars/${id}?populate=*`);
  return data.json();
};

const SingleCarPage = async ({ params }) => {
  const { carId } = params;
  const car = await singleCarFetch(carId);

  return (
    <div className="max-w-7xl mx-auto pt-10 flex flex-col gap-y-3 px-5">
      <div className="text-lg breadcrumbs max-[400px]:text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Cars</a>
          </li>
          <li>{car?.data?.attributes?.carTitle}</li>
        </ul>
      </div>
      <h1 className="text-4xl font-bold max-[400px]:text-3xl">
        {car?.data?.attributes?.carTitle}
      </h1>
      <p className="text-xl max-[400px]:text-lg">
        3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate
      </p>
      <div className="flex justify-between items-center max-[750px]:flex-col max-[750px]:items-start max-[750px]:gap-y-5">
        <div className="flex gap-x-2 max-[520px]:flex-col max-[520px]:gap-y-2 max-[520px]:flex-col max-[520px]:gap-x-0">
          <CustomBadge badgeText={car?.data?.attributes?.year}>
            <FaCalendarDays />
          </CustomBadge>
          <CustomBadge badgeText={`${car?.data?.attributes?.mileage} miles`}>
            <IoIosSpeedometer className="text-2xl" />
          </CustomBadge>
          <CustomBadge badgeText={car?.data?.attributes?.transmission}>
            <TbManualGearbox className="text-2xl" />
          </CustomBadge>
          <CustomBadge badgeText={car?.data?.attributes?.fuelType}>
            <BsFillFuelPumpFill />
          </CustomBadge>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-3xl">${car?.data?.attributes?.price}</p>
          <p className="text-lg flex gap-x-2 items-center">
            <IoPricetagOutline className="text-xl" />{" "}
            <span>Make An Offer Price</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 max-[800px]:grid-cols-1 max-[800px]:gap-y-1">
        <div>
          <Image
            src={`http://localhost:1337${car?.data?.attributes?.carMainImage?.data?.attributes?.url}`}
            width="800"
            height="500"
            alt="car image"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {car?.data?.attributes?.carImages?.data &&
            car?.data?.attributes?.carImages?.data.map((imageObj) => {
              return (
                <Image
                  src={`http://localhost:1337${imageObj?.attributes?.url}`}
                  width="800"
                  height="500"
                  alt="car image"
                />
              );
            })}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold my-5 max-[500px]:text-2xl">
          Description
        </h2>
        <p className="max-[500px]:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          maxime reprehenderit dolore provident cumque possimus a, voluptatum,
          itaque, voluptates quisquam laboriosam fuga eaque. Officiis quam,
          fugiat voluptatem eaque suscipit inventore.
        </p>
      </div>
    </div>
  );
};

export default SingleCarPage;
