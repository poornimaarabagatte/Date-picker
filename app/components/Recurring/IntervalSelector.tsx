import { useRecurringStore } from "../../store/useRecurringStore";

export default function IntervalSelector() {
  const { interval, setInterval, recurrence } = useRecurringStore();

  const labelMap: Record<string, string> = {
    daily: "days",
    weekly: "weeks",
    monthly: "months",
    yearly: "years",
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Repeat every:</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border p-2 rounded w-20"
        />
        <span>{labelMap[recurrence]}</span>
      </div>
    </div>
  );
}
