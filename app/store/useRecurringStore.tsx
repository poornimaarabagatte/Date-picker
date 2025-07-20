import { create } from "zustand";

export type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";
export type MonthlyPatternType = "dayOfMonth" | "dayOfWeek";

interface RecurringState {
  startDate: Date | null;
  endDate: Date | null;
  frequency: RecurrenceType;
  interval: number;
  weeklyDays: number[]; 
  monthlyPattern: {
    type: MonthlyPatternType;
    value: number;
  };
  customPatterns: any[];

  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setFrequency: (value: RecurrenceType) => void;
  setInterval: (value: number) => void;
  setWeeklyDays: (days: number[]) => void;
  setMonthlyPattern: (type: MonthlyPatternType, value: number) => void;
  setCustomPatterns: (patterns: any[]) => void;

  reset: () => void;
}

export const useRecurringStore = create<RecurringState>((set) => ({
  startDate: null,
  endDate: null,
  frequency: "daily",
  interval: 1,
  weeklyDays: [],
  monthlyPattern: { type: "dayOfMonth", value: 1 },
  customPatterns: [],

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setFrequency: (value) => set({ frequency: value }),
  setInterval: (value) => set({ interval: value }),
  setWeeklyDays: (days) => set({ weeklyDays: days }),
  setMonthlyPattern: (type, value) => set({ monthlyPattern: { type, value } }),
  setCustomPatterns: (patterns) => set({ customPatterns: patterns }),

  reset: () =>
    set({
      startDate: null,
      endDate: null,
      frequency: "daily",
      interval: 1,
      weeklyDays: [],
      monthlyPattern: { type: "dayOfMonth", value: 1 },
      customPatterns: [],
    }),
}));
