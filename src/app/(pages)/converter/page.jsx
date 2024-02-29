import CurrencyConverter from "@/app/_components/CurrencyConverter";
import getCurencies from "@/app/_services/getCurencies";
export default async function Converter() {
  const today = new Date();
  const { rates } = await getCurencies(today.toISOString().split("T")[0]);

  return <CurrencyConverter rates={{...rates, EUR: 1}} date={today.toISOString().split("T")[0]}/>;
}
