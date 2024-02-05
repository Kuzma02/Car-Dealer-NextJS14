import Banner from "@/components/Banner";
import CarsSection from "@/components/CarsSection";



export default async function Home() {

  return (
    <>
      <Banner />
      <CarsSection
        sectionTitle="RECENT CARS"
        sectionDesc="Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo."
      />
    </>
  );
}
