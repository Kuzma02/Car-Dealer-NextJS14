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