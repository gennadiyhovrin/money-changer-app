"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ConvertBlock from "./ConvertBlock";

const CurrencyConverter = ({ rates, date, history, setHistory }) => {
  console.log("update");
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const maxDate = today.toISOString().split("T")[0];
  const minDate = sevenDaysAgo.toISOString().split("T")[0];

  let data = {
    amount: 0,
    convertedAmount: 0,
    currencyFrom: "USD",
    currencyTo: "EUR",
    date: date,
  };

  const router = useRouter();

  const [convertData, setConvertData] = useState(data);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (convertData.date !== date) {
      router.push(`/converter/${convertData.date}`);
    }
  }, [convertData.date]);

  useEffect(() => {
    const amount = !trigger ? convertData.amount : convertData.convertedAmount;

    const currencyFrom = trigger
      ? convertData.currencyTo
      : convertData.currencyFrom;

    const currencyTo = trigger
      ? convertData.currencyFrom
      : convertData.currencyTo;

    const rate = rates[currencyTo] / rates[currencyFrom];

    setConvertData({
      ...convertData,
      [trigger ? "amount" : "convertedAmount"]: (amount * rate).toFixed(2),
    });
  }, [
    convertData.amount,
    convertData.currencyFrom,
    convertData.currencyTo,
    convertData.convertedAmount,
  ]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("convertData"));
    if (items) {
      setConvertData({ ...items, date: date });
    }
  }, []);

  const handleChange = (event) => {
    const newData = {
      ...convertData,
      [event.target.name]: event.target.value,
    };

    setConvertData(newData);
    localStorage.setItem("convertData", JSON.stringify(convertData));
  };

  const convertCurrency = () => {
    setHistory([...history, convertData]);
    localStorage.setItem("history", JSON.stringify([...history, convertData]));
  };

  return (
    <div className="flex  justify-center items-center bg-[#f6f7ff]  py-12 ">
      <div className="bg-white p-6 rounded-lg shadow-lg px-10 py-8">
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
            currencyList={Object.keys(rates)}
            setTrigger={setTrigger}
            from={false}
          />

          <div className="transform rotate-90 md:rotate-0 text-2xl self-end">
            <button className="text-gray-500">⇆</button>
          </div>

          <ConvertBlock
            amount={convertData.convertedAmount}
            currency={convertData.currencyTo}
            title="Хочу придбати:"
            handleChange={handleChange}
            inputName="convertedAmount"
            selectName="currencyTo"
            currencyList={Object.keys(rates)}
            setTrigger={setTrigger}
            from={true}
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
