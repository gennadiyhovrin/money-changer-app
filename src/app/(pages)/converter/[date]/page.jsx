import CurrencyConverter from "@/app/_components/CurrencyConverter";
import getCurencies from "@/app/_services/getCurencies";
import isValidDate from "@/app/_lib/isValidDate";
export default async function Converter({ params }) {
  const { date } = params;

  const { rates } = await getCurencies(
    isValidDate(date) ? date : new Date().toISOString().split("T")[0]
  );

  return <CurrencyConverter rates={{...rates, EUR: 1}} date={date} />;
}
