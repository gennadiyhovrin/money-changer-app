import ConversionHistory from "../../../components/ConversionHistory";
import CurrencyConverter from "../../../components/CurrencyConverter";

export default async function Converter() {
  return (
    <>
      <CurrencyConverter />
      <ConversionHistory />
    </>
  );
}
