import Image from 'next/image';
import React from 'react';

const CurrencyConverterSection = () => {
  return (
    <div className="flex justify-center items-center bg-white py-28">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Конвертер валют</h2>
          <p className="text-gray-600 mb-6">
            Переважна діяльність банківської групи за останні звітні звіти кварталу становить 50 і більше відсотків.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Конвертувати валюту
          </button>
        </div>
        <div className="flex-1">
          <Image width={436} height={314} src="/images/image-1.png" alt="Currency Converter" className="rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterSection;