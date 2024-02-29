import AmountInput from "./AmountInput";
import SelectCurrency from "./SelectCurrency";
const ConvertBlock = ({
  amount,
  currency,
  handleChange,
  title,
  inputName,
  selectName,
  currencyList,
  setTrigger,
  from
}) => {
  return (
    <div>
      <p className="block text-gray-700 text-sm font-bold mb-2">{title}</p>
      <div className="flex flex-row  justify-between items-center w-72">
        <AmountInput
          amount={amount}
          handleChange={handleChange}
          inputName={inputName}
          setTrigger={setTrigger}
          from={from}
        />
        <SelectCurrency
          currencyList={currencyList}
          currency={currency}
          handleChange={handleChange}
          selectName={selectName}
        />
      </div>
    </div>
  );
};

export default ConvertBlock;
