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

export default function MonthlySelector() {
  const { recurrence, monthlyPattern, setMonthlyPattern } = useRecurringStore();

  if (recurrence !== "monthly") return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMonthlyPattern({
      ...monthlyPattern,
      [name]: parseInt(value),
    });
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Repeat on:</label>
      <div className="flex gap-2">
        <select
          name="weekIndex"
          value={monthlyPattern.weekIndex}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          {weekOptions.map((week) => (
            <option key={week.value} value={week.value}>
              {week.label}
            </option>
          ))}
        </select>

        <select
          name="weekday"
          value={monthlyPattern.weekday}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          {weekdayOptions.map((day) => (
            <option key={day.value} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
