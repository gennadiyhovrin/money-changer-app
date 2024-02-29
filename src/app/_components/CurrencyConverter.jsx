"use client";

import React, { useState } from "react";
import ConvertBlock from "./ConvertBlock";

const CurrencyConverter = () => {
  // const host = "api.frankfurter.app";
  // fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     alert(`10 GBP = ${data.rates.USD} USD`);
  //   });

  const [convertData, setConvertData] = useState({
    amount: 1000,
    convertedAmount: 38.7,
    currencyFrom: "UAH",
    currencyTo: "USD",
    date: "2020-12-01",
  });

  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
  const maxDate = today.toISOString().split('T')[0]; 
  const minDate = sevenDaysAgo.toISOString().split('T')[0];


  const handleChange = (event) => {
    setConvertData({
      ...convertData,
      [event.target.name]: event.target.value,
    });
  };

  const convertCurrency = () => {
    // Implement the logic for currency conversion here
    // For now, it's just a placeholder function
    console.log("Convert currency here");
  };

  return (
    <div className="flex  justify-center items-center bg-[#f6f7ff]  py-24 ">
      <div className="bg-white p-6 rounded-lg shadow-lg px-20 py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Конвертер валют
        </h2>
        <div className="flex align-items-center gap-5">
          <ConvertBlock
            amount={convertData.amount}
            currency={convertData.currencyFrom}
            title="В мене є:"
            handleChange={handleChange}
            inputName="amount"
            selectName="currencyFrom"
          />

          <div className="transform rotate-90 md:rotate-0 text-2xl self-end">
            <button onClick={convertCurrency} className="text-gray-500">
              ⇆
            </button>
          </div>

          <ConvertBlock
            amount={convertData.convertedAmount}
            currency={convertData.currencyTo}
            title="Хочу придбати:"
            handleChange={handleChange}
            inputName="convertedAmount"
            selectName="currencyTo"
          />
        </div>

        <div className="flex justify-between gap-5 mt-5">
          <input
            type="date"
            name="date"
            min={minDate}
            max={maxDate}
            value={convertData.date}
            onChange={handleChange}
            className=" shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={convertCurrency}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Зберегти результат
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
