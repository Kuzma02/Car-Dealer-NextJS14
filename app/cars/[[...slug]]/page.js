import CarElement from "@/components/CarElement";
import CarsPageFilter from "@/components/CarsPageFilter";
import CarsSection from "@/components/CarsSection";
import CarsSortBy from "@/components/CarsSortBy";
import PageHeader from "@/components/PageHeader";

const fetchCars = async () => {
    const data = await fetch("http://localhost:1337/api/cars?populate=*");
    return data.json();
  } 

  


const Cars = async ({params,searchParams}) => {
    const cars = await fetchCars();
    console.log(searchParams);
  return (
    <>
    <div className="max-w-7xl mx-auto px-5">
      <PageHeader />
      <CarsPageFilter />
      <CarsSortBy />
    </div>
    
    <div className="mt-5 font-bold text-black max-sm:px-2 max-w-screen-2xl mx-auto
    ">
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 mt-5">
        {cars && cars.data.map((car) => (
          <CarElement key={car.id} carTitle={car?.attributes?.carTitle} carImage={car?.attributes?.carMainImage?.data?.attributes?.url} mileage={car?.attributes?.mileage} fuelType={car?.attributes?.fuelType} transmission={car?.attributes?.transmission} price={car?.attributes?.price} />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Cars;