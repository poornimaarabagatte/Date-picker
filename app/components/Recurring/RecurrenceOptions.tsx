import { useRecurringStore } from "../../store/useRecurringStore";

export default function RecurrenceOptions() {
  const recurrence = useRecurringStore((state) => state.recurrence);
  const setRecurrence = useRecurringStore((state) => state.setRecurrence);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRecurrence(e.target.value as any); // cast to match "daily" | "weekly" etc
  };

  const options = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="mb-4">
      <label className="font-medium block mb-1">Recurrence:</label>
      <select
        className="border p-2 rounded w-full"
        value={recurrence}
        onChange={handleChange}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
