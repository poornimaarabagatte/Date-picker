"use client";
import { useRecurringStore } from "../../store/useRecurringStore";
import RecurrenceOptions from "./RecurrenceOptions";
import DateRangePicker from "./DateRangePicker";
import IntervalSelector from "./IntervalSelector";
import WeeklySelector from "./WeeklySelector";
import MonthlySelector from "./MonthlySelector";
import CustomPatternSelector from "./CustomPatternSelector";
import CalendarPreview from "./CalendarPreview";

export default function RecurringDatePicker() {
  const reset = useRecurringStore((state) => state.reset);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Recurring Date Picker
      </h2>

      <div className="space-y-4">
        <RecurrenceOptions />

        <DateRangePicker />

        <IntervalSelector />

        <WeeklySelector />

        <MonthlySelector />

        <CustomPatternSelector />

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Calendar Preview (Next 10):
          </h3>
          <CalendarPreview />
        </div>
      </div>

      <button
        onClick={reset}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg w-full transition"
      >
        Reset All
      </button>
    </div>
  );
}
