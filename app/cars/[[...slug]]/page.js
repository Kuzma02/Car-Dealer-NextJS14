import CarElement from "@/components/CarElement";
import CarsPageFilter from "@/components/CarsPageFilter";
import CarsSortBy from "@/components/CarsSortBy";
import PageHeader from "@/components/PageHeader";

const fetchCars = async (sort) => {
  
  let data;
  switch (sort) {
    case "newestCars":
      data = await fetch(
        "http://localhost:1337/api/cars?sort=id:asc&populate=*"
      );
      break;
    case "oldestCars":
      data = await fetch(
        "http://localhost:1337/api/cars?sort=id:desc&populate=*"
      );
      break;

    case "lowestPrice":
      data = await fetch(
        "http://localhost:1337/api/cars?sort=price:asc&populate=*"
      );
      break;
    case "highestPrice":
      data = await fetch(
        "http://localhost:1337/api/cars?sort=price:desc&populate=*"
      );
      break;

    default:
      data = await fetch("http://localhost:1337/api/cars?populate=*");
      break;
  }

  return data.json();
};

const Cars = async ({ params, searchParams }) => {
  const { sort } = searchParams;
  const cars = await fetchCars(sort);

  return (
    <>
      <div className="max-w-7xl mx-auto px-5">
        <PageHeader />
        <CarsPageFilter />
        <CarsSortBy />
      </div>

      <div
        className="mt-5 font-bold text-black max-sm:px-2 max-w-screen-2xl mx-auto
    "
      >
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 mt-5">
          {cars &&
            cars.data.map((car) => (
              <CarElement
                key={car.id}
                carTitle={car?.attributes?.carTitle}
                carImage={car?.attributes?.carMainImage?.data?.attributes?.url}
                mileage={car?.attributes?.mileage}
                fuelType={car?.attributes?.fuelType}
                transmission={car?.attributes?.transmission}
                price={car?.attributes?.price}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
