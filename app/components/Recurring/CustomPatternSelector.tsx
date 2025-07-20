
import { useRecurringStore } from "../../store/useRecurringStore";

const weekOptions = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Last", value: 5 },
];

const weekdayOptions = [
  { label: "Sunday", value: 0 },
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
];

export default function CustomPatternSelector() {
  const { monthlyPattern, setMonthlyPattern } = useRecurringStore();

  return (
    <div className="space-x-4">
      <label className="font-medium mr-2">Repeat on:</label>

      <select
        className="border p-2 rounded"
        value={monthlyPattern.weekIndex}
        onChange={(e) =>
          setMonthlyPattern({
            ...monthlyPattern,
            weekIndex: parseInt(e.target.value),
          })
        }
      >
        {weekOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={monthlyPattern.weekday}
        onChange={(e) =>
          setMonthlyPattern({
            ...monthlyPattern,
            weekday: parseInt(e.target.value),
          })
        }
      >
        {weekdayOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
