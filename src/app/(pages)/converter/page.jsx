import getCurencies from "@/app/_services/getCurencies";
import HistoryWrapper from "@/app/_components/HistoryWrapper";
export default async function Converter() {
  const today = new Date();
  const { rates } = await getCurencies(today.toISOString().split("T")[0]);

  return <HistoryWrapper rates={{...rates, EUR: 1}} date={today.toISOString().split("T")[0]} />;
}


