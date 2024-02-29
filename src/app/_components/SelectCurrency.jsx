const SelectCurrency = ({
  currency,
  handleChange,

  selectName,
}) => {
  return (
    <select
      value={currency}
      onChange={handleChange}
      className=" block  bg-white border border-gray-400 hover:border-gray-500 px-2 py-2  rounded shadow leading-tight focus:outline-none focus:shadow-outline w-20"
      name={selectName}
    >
      <option>UAH</option>
      <option>USD</option>
    </select>
  );
};

export default SelectCurrency;
