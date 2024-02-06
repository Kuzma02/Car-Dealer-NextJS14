'use server'
import { redirect } from 'next/navigation'
 
export async function sortCars(formData) {
  switch (formData) {
    case "defaultSort":
      redirect("/cars");
      break;
    case "newestSort":
      redirect("/cars?sort=newestCars");
      break;
    
    case "oldestSort":
      redirect("/cars?sort=oldestCars");
      break;

    case "lowestPriceSort":
      redirect("/cars?sort=lowestPrice");
      break;

    case "highPriceSort":
      redirect("/cars?sort=highestPrice");
      break;
  
    default:
      redirect("/cars");
      break;
  }
}

export async function filterCars(formData){
  redirect(`/cars?condition=${formData.get("conditions") || "all"}&transmission=${formData.get("transmissions") || 'all'}&fuel=${formData.get("fuels") || 'all'}`);
}

export async function filterAndSortCars(formData){
  const sort = formData.get("sort");
  let sortQuery = "";
  switch(sort){
    case "defaultSort":
      sortQuery ="";
      break;
    case "newestSort":
      sortQuery = "&sort=newestCars";
      break;
    
    case "oldestSort":
      sortQuery = "&sort=oldestCars";
      break;

    case "lowestPriceSort":
      sortQuery = "&sort=lowestPrice";
      break;

    case "highPriceSort":
      sortQuery = "&sort=highestPrice";
      break;
  
    default:
      sortQuery = "";
      break;
  }
  redirect(`/cars?condition=${formData.get("conditions") || "all"}&transmission=${formData.get("transmissions") || 'all'}&fuel=${formData.get("fuels") || 'all'}${sortQuery}`);
}