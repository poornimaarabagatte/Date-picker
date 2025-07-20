"use client";
import React from "react";
import { useRecurringStore } from "../../store/useRecurringStore";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurringStore();

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Start Date:</label>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={startDate ? new Date(startDate).toISOString().split("T")[0] : ""}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">End Date (optional):</label>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={endDate ? new Date(endDate).toISOString().split("T")[0] : ""}
          onChange={(e) => {
            const val = e.target.value;
            setEndDate(val ? new Date(val) : null);
          }}
        />
      </div>
    </div>
  );
}
