"use client";

import { CalendarIcon, ClockIcon, RepeatIcon } from "lucide-react";
import { useRecurringStore } from "../../store/useRecurringStore";
import { useState } from "react";
import { format } from "date-fns";

export default function CalendarPreview() {
  const {
    startDate,
    endDate,
    frequency,
    interval,
    weeklyDays,
    monthlyPattern,
    reset,
  } = useRecurringStore();

  const [time, setTime] = useState("08:00");

  return (
    <div className="w-full max-w-md p-4 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl shadow-xl text-gray-800 space-y-4">
      {/* Date Selection */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <span className="text-sm text-gray-500">Start date</span>
          <div className="flex items-center justify-between rounded-lg border px-2 py-1 mt-1 text-sm bg-white">
            <span>{startDate ? format(startDate, "PPP") : "Tomorrow"}</span>
            <CalendarIcon className="h-4 w-4 text-purple-500" />
          </div>
        </div>
        <div>
          <span className="text-sm text-gray-500">Due date</span>
          <div className="flex items-center justify-between rounded-lg border px-2 py-1 mt-1 text-sm bg-white">
            <span>{endDate ? format(endDate, "PPP") : "Saturday"}</span>
            <ClockIcon className="h-4 w-4 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="flex justify-between text-xs text-gray-600">
        <button className="px-2 py-1 hover:bg-purple-100 rounded">Today</button>
        <button className="px-2 py-1 hover:bg-purple-100 rounded">
          Tomorrow
        </button>
        <button className="px-2 py-1 hover:bg-purple-100 rounded">
          Next week
        </button>
        <button className="px-2 py-1 hover:bg-purple-100 rounded">
          This week
        </button>
      </div>

      {/* Time & Recurrence */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <ClockIcon className="h-4 w-4 text-purple-500" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-purple-600">
          <RepeatIcon className="h-4 w-4" />
          <span>
            Recurs {frequency}
            {interval && ` every ${interval}x`} until{" "}
            {endDate ? format(endDate, "MMM dd, yyyy") : "..."}
          </span>
        </div>
      </div>
    </div>
  );
}
