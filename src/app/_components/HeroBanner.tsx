import Image from "next/image";
import Button from "./Button";

const HeroBanner = () => {
  const backgroundStyle = {
    backgroundImage: "url(/images/rectangle-2.png)",
  };

  return (
    <div style={backgroundStyle} className=" text-white bg-cover bg-no-repeat	">
      <div className="flex justify-around items-center h-96">
        <div>
          <h1 className="text-5xl	 font-bold">Чіп Чендж</h1>
          <p className="text-xl	 mt-5 font-medium	">Обмінник валют - навчальний</p>
          <Button text="Конвертер валют" style="bg-white text-gray-600" />
        </div>
        <div className="flex items-center">
          <Image
            width={341}
            height={216}
            src="/images/standard-mastercard-card-debit_1280x720-2.png"
            alt="Mastercard Debit Card"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
