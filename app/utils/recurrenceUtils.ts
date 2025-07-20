import { RecurrenceType } from "../store/useRecurringStore";

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getWeekdayName(index: number): string {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index];
}

export function generateRecurringDates({
  startDate,
  endDate,
  recurrence,
  interval,
  selectedWeekdays,
  monthlyPattern,
}: {
  startDate: Date;
  endDate: Date;
  recurrence: RecurrenceType;
  interval: number;
  selectedWeekdays: number[];
  monthlyPattern: { weekIndex: number; weekday: number };
}): Date[] {
  const dates: Date[] = [];
  let current = new Date(startDate);

  while (current <= endDate) {
    switch (recurrence) {
      case "daily":
        dates.push(new Date(current));
        current = addDays(current, interval);
        break;

      case "weekly":
        // Generate dates based on selected weekdays
        for (let i = 0; i < 7; i++) {
          const day = addDays(current, i);
          if (day > endDate) break;
          if (selectedWeekdays.includes(day.getDay())) {
            dates.push(new Date(day));
          }
        }
        current = addDays(current, 7 * interval);
        break;

      case "monthly":
        const year = current.getFullYear();
        const month = current.getMonth();
        const { weekIndex, weekday } = monthlyPattern;

        const firstOfMonth = new Date(year, month, 1);
        const dayOfWeek = firstOfMonth.getDay();
        let day = 1 + ((7 + weekday - dayOfWeek) % 7) + (weekIndex - 1) * 7;

        const targetDate = new Date(year, month, day);
        if (targetDate >= startDate && targetDate <= endDate) {
          dates.push(targetDate);
        }

        current = new Date(year, month + interval, 1);
        break;

      case "yearly":
        const yearDate = new Date(current);
        if (yearDate >= startDate && yearDate <= endDate) {
          dates.push(new Date(yearDate));
        }
        current.setFullYear(current.getFullYear() + interval);
        break;
    }
  }

  return dates;
}
