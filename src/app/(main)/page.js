import Banner from "@/components/home/Banner";
import PopularProducts from "@/components/home/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
    </div>
  );
}
