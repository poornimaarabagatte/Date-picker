import { useRecurringStore } from "../../store/useRecurringStore";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeeklySelector() {
  const { selectedWeekdays, setSelectedWeekdays, recurrence } =
    useRecurringStore();

  // Only show if recurrence is 'weekly'
  if (recurrence !== "weekly") return null;

  const toggleDay = (index: number) => {
    if (selectedWeekdays.includes(index)) {
      setSelectedWeekdays(selectedWeekdays.filter((day) => day !== index));
    } else {
      setSelectedWeekdays([...selectedWeekdays, index]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Repeat on:</label>
      <div className="flex gap-2 flex-wrap">
        {weekdays.map((day, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded border transition ${
              selectedWeekdays.includes(index)
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => toggleDay(index)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
