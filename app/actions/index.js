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