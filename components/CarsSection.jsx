
import CarElement from "./CarElement";

const fetchCars = async () => {
  const data = await fetch("http://localhost:1337/api/cars?populate=*");
  return data.json();
} 

const CarsSection = async ({ sectionTitle, sectionDesc, searchParams}) => {
  const cars = await fetchCars();
  console.log(searchParams);
  return (
    <div className="mt-5 font-bold text-black max-sm:px-2 max-w-screen-2xl mx-auto
    ">
      <h2 className="text-5xl text-center max-sm:text-3xl">{sectionTitle}</h2>
      <p className="text-2xl text-center mt-2 max-sm:text-base">
        {sectionDesc}
      </p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 mt-5">
        {cars && cars.data.map((car) => (
          <CarElement key={car.id} carTitle={car?.attributes?.carTitle} carImage={car?.attributes?.carMainImage?.data?.attributes?.url} mileage={car?.attributes?.mileage} fuelType={car?.attributes?.fuelType} transmission={car?.attributes?.transmission} price={car?.attributes?.price} />
        ))}
      </div>
    </div>
  );
};

export default CarsSection;
