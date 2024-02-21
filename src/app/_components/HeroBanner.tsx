import Image from "next/image";

const HeroBanner = () => {
  const backgroundStyle = {
    backgroundImage: "url(/images/rectangle-2.png)",
  };

  return (
    <div style={backgroundStyle} className=" text-white bg-cover bg-no-repeat	">
      <div className="flex justify-around items-center h-96">
        <div>
          <h1 className="text-5xl	 font-bold">Чіп Чендж</h1>
          <p className="text-sm mt-5 font-medium	text-2xl">Обмінник валют - навчальний</p>
          <button className="bg-white	mt-5 text-gray-600 py-2 px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline	 text-lg	px-5">
            Конвертер валют
          </button>
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
