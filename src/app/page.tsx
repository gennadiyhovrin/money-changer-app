import Image from "next/image";
import HeroBanner from "./_components/HeroBanner";
import CurrencyConverterSection from "./_components/CurrencyConverterSection";

export default function Home() {
  return (
    <div className="bg-[#f6f7ff] ">
      <HeroBanner />
      <CurrencyConverterSection />
    </div>
  );
}
