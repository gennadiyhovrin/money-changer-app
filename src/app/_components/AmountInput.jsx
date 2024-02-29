const AmountInput = ({ amount, handleChange, inputName }) => {
  return (
    <input
      type="number"
      name={inputName}
      value={amount}
      onChange={handleChange}
      className="shadow block appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-auto"
    />
  );
};

export default AmountInput;
