import CarElement from "@/components/CarElement";
import CarsPageFilter from "@/components/CarsPageFilter";
import CarsSortBy from "@/components/CarsSortBy";
import PageHeader from "@/components/PageHeader";

const fetchSortedCars = async (sort) => {
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

const fetchFilteredCars = async (condition, transmission, fuel) => {
  let data;
  data = await fetch(
    `http://localhost:1337/api/cars?populate=*${
      fuel == "all" ? "" : `&filters[fuelType][$eq]=${fuel}`
    }${condition == "all" ? "" : `&filters[condition][$eq]=${condition}`}${
      transmission == "all" ? "" : `&filters[transmission][$eq]=${transmission}`
    }`
  );
  return data.json();
};

const fetchFilteredAndSortedCars = async (
  sort,
  condition,
  transmission,
  fuel
) => {
  let data;
  let sortQuery = "";

  switch (sort) {
    case "newestCars":
      sortQuery="&sort=id:asc";
      break;
    case "oldestCars":
      sortQuery="&sort=id:desc";
      break;
    case "lowestPrice":
      sortQuery="&sort=price:asc";
      break;
    
    case "highestPrice":
      sortQuery="&sort=price:desc";
      break;
  
    default:
      sortQuery="";
      break;
  }

  data = await fetch(
    `http://localhost:1337/api/cars?populate=*${
      fuel === "all" || !fuel ? "" : `&filters[fuelType][$eq]=${fuel}`
    }${
      condition === "all" || !condition
        ? ""
        : `&filters[condition][$eq]=${condition}`
    }${
      transmission === "all" || !transmission
        ? ""
        : `&filters[transmission][$eq]=${transmission}`
    }${sortQuery === "" ? "" : sortQuery}`
  );
  return data.json();
};

const Cars = async ({ params, searchParams }) => {
  let cars;
  const { sort, condition, transmission, fuel } = searchParams;

  // if(condition){
  //   cars = await fetchFilteredCars(condition, transmission, fuel);
  // }else{
  //   cars = await fetchSortedCars(sort);
  // }
  cars = await fetchFilteredAndSortedCars(sort, condition, transmission, fuel);

  return (
    <>
      <div className="max-w-7xl mx-auto px-5">
        <PageHeader />
        <CarsPageFilter carsNumber={cars?.meta?.pagination?.total} />
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
                id={car.id}
                carTitle={car?.attributes?.carTitle}
                carImage={car?.attributes?.carMainImage?.data?.attributes?.url}
                mileage={car?.attributes?.mileage}
                fuelType={car?.attributes?.fuelType}
                transmission={car?.attributes?.transmission}
                price={car?.attributes?.price}
              />
            ))}
          {cars && cars.data.length === 0 && (
            <h2 className="text-4xl py-10 max-sm:text-2xl">
              No cars found for the given search
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cars;
