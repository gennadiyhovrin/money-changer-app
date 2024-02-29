import HistoryWrapper from "@/app/_components/HistoryWrapper";
import getCurencies from "@/app/_services/getCurencies";
import isValidDate from "@/app/_lib/isValidDate";
export default async function Converter({ params }) {
  const { date } = params;

  const { rates } = await getCurencies(
    isValidDate(date) ? date : new Date().toISOString().split("T")[0]
  );

  return <HistoryWrapper rates={{...rates, EUR: 1}} date={date} />;
}
