import Image from 'next/image';
import React from 'react';
import Button from './Button';

const CurrencyConverterSection = () => {
  return (
    <div className="flex justify-center items-center bg-white py-28">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Конвертер валют</h2>
          <p className="text-gray-600 mb-6 text-xl	font-normal	">
            Переважна діяльність банківської групи за останні звітні звіти кварталу становить 50 і більше відсотків.
          </p>
          <Button text="Конвертувати валюту" style="bg-blue-500 text-white" />
          
        </div>
        <div className="flex-1">
          <Image width={436} height={314} src="/images/image-1.png" alt="Currency Converter" className="rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterSection;
 // const host = "api.frankfurter.app";
  // fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     alert(`10 GBP = ${data.rates.USD} USD`);
  //   });