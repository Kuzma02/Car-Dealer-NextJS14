import Image from 'next/image'
import React from 'react'
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";




const CarElement = ({ carTitle, carImage, mileage, transmission, fuelType, price }) => {
    const carImageFull = `http://localhost:1337${carImage}`;
  return (
    <div className='w-[420px] border rounded-xl'>
        <div>
            <Image src={carImageFull} width={420} height={200} className='w-full rounded-t-xl' alt={carTitle} />
            
        </div>
        <div className='px-5 py-2 flex flex-col gap-2'>
        <h2 className='text-xl font-medium'>{ carTitle }</h2>
            <p className='font-light'>3.5 D5 PowerPulse Momentum 5dr AW...</p>
            <div className='flex justify-between font-light mt-2 border-y-[1px] py-3'>
                <div className='flex flex-col items-center text-base gap-y-1'>
                    <IoSpeedometerOutline className='text-2xl' />
                    <p>{ mileage } miles</p>
                </div>
                <div className='flex flex-col items-center text-base gap-y-1'>
                    <BsFillFuelPumpFill className='text-2xl'  />
                    <p>{ fuelType }</p>
                </div>
                <div className='flex flex-col items-center text-base gap-y-1'>
                    <TbAutomaticGearbox className='text-2xl'  />
                    <p>{ transmission }</p>
                </div>
            </div>
            <div className="flex justify-between py-2">
                <p className='text-xl'>${ price }</p>
                <button className='text-lg text-blue-600 font-normal flex gap-x-2 items-center hover:bg-blue-100'>View Details <BsArrowUpRight className='text-xl' /></button>
            </div>
        </div>
    </div>
  )
}

export default CarElement