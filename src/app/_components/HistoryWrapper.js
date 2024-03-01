"use client";
import CurrencyConverter from "./CurrencyConverter";
import ConversionHistory from "./ConversionHistory";
import { useEffect, useState } from "react";
const HistoryWrapper = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("history"));
    if (items) {
      setHistory(items);
    }
  }, []);
  return (
    <>
      <CurrencyConverter history={history} setHistory={setHistory} />
      <ConversionHistory history={history} setHistory={setHistory} />
    </>
  );
};

export default HistoryWrapper;
