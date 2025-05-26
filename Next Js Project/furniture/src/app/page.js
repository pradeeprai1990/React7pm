import Image from "next/image";
import Banner from "./components/HomeComponents/Banner";
import CategorySection from "./components/HomeComponents/CategorySection";

export default function Home() {
  //Api Fetch 
  return (
    <div className="overflow-hidden">
      <Banner />
      <CategorySection />
    </div>
  );
}
