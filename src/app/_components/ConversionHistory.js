"use client";

const ConversionHistory = ({ history, setHistory }) => {
  if (!history) {
    return null;
  }
  return (
    <div className="flex  justify-center items-center bg-white   py-12 ">
      <div className=" bg-[#f6f7ff] py-8 px-12 rounded-lg shadow-lg  ">
        <div className="flex justify-between items-center  mb-4">
          <h2 className="text-lg font-semibold text-gray-700 w-80">
            Історія конвертації
          </h2>
          <button
            onClick={() =>{
              localStorage.removeItem("history");
              setHistory([])
            } }
            className="bg-blue-500 text-white px-4 w-80 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Очистити історію{" "}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {history &&
            history
              .slice()
              .reverse()
              .map((entry, index) => (
                <div key={index} className="bg-white px-2 py-2 rounded w-80">
                  <div className="flex justify-between items-center ">
                    <span className="text-gray-600">{entry.date} </span>
                    <span>
                      {" "}
                      {entry.amount} {entry.currencyFrom} →{" "}
                      {entry.convertedAmount} {entry.currencyTo}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionHistory;
