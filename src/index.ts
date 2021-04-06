import { DateTime } from "luxon";

/**
 * Get the next date/time after the specified reference date
 * @param schedule IntervalSchedule that defines this interval pattern
 * @param startingOn Date the schedule starts on. Matters for dayInterval and weekInterval only. Defaults to now
 * @param nowDate Date the result must be after. Defaults to now
 * @returns Date with the next time this schedule should fire
 */
export function getNextDate(
  schedule: IntervalSchedule,
  nowDate: Date = new Date()
): Date {
  const {
    timezone,
    hours,
    minutes,
    seconds,
    daysOfMonth,
    daysOfWeek,
    daysOfYear,
    weekInterval,
    orderInMonth,
    monthsOfYear,
    dayInterval,
    startingOn: _startingOn,
    endingOn: _endingOn,
  } = schedule;
  validateSchedule(schedule);
  const startingOn = _startingOn && new Date(_startingOn);
  const endingOn = _endingOn && new Date(_endingOn);
  let now = DateTime.fromJSDate(nowDate).setZone(timezone);
  if (startingOn && now.valueOf() < startingOn.valueOf()) {
    now = DateTime.fromJSDate(startingOn).setZone(timezone);
  }
  //Figure out combination of days and weeks
  const potentialTimes = hours.flatMap((hour) =>
    (minutes || [0]).flatMap((minute) =>
      (seconds || [0]).map(
        (second) => ({ hour, minute, second })
        // //format hh:mm:ss
        // `${hour
        //   .toString()
        //   .padStart(2, "0")}:${minute
        //   .toString()
        //   .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
      )
    )
  );
  const potentialDates: string[] = [];

  const addToDates = (date: DateTime) =>
    potentialDates.push(
      ...potentialTimes.map(({ hour, minute, second }) =>
        date.setZone(timezone).set({ hour, minute, second }).toISO()
      )
    );
  if (orderInMonth && daysOfWeek) {
    let start = now.set({ day: 1 });
    for (let x = 0; x < 2; x++) {
      while (monthsOfYear && !monthsOfYear.includes(start.month)) {
        start = start.plus({ month: 1 }).set({ day: 1 });
      }
      daysOfWeek?.forEach((dow) => {
        let thisStart = start;
        const currentMonth = thisStart.month;
        while (thisStart.weekday !== dow) {
          thisStart = thisStart.plus({ day: 1 });
        }
        orderInMonth.forEach((weekOfMonth) => {
          if (weekOfMonth === -1) {
            //looking for last one, knowing it cannot be more than 28 days ahead
            thisStart = thisStart.plus({ day: 28 });
            while (thisStart.month !== currentMonth) {
              thisStart = thisStart.minus({ day: 7 });
            }
            addToDates(thisStart);
          } else {
            const nthWeekday = thisStart.plus({ day: 7 * (weekOfMonth - 1) });
            if (nthWeekday.month === currentMonth) {
              addToDates(nthWeekday);
            }
          }
        });
      });
      start = start.plus({ month: 1 });
    }
  } else if (weekInterval) {
    if (!startingOn) throw new Error("weekInterval requires startingOn");
    let start = DateTime.fromJSDate(startingOn)
      .setZone(timezone)
      .set({ weekday: 0 });
    now = now.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      weekday: 0,
    });

    while (start.diff(now).valueOf() < 0) {
      start = start.plus({ week: weekInterval });
    }
    (daysOfWeek || [0, 1, 2, 3, 4, 5, 6]).forEach((weekday) => {
      addToDates(start.set({ weekday }));
      addToDates(start.plus({ week: weekInterval }).set({ weekday }));
      addToDates(start.plus({ week: weekInterval * 2 }).set({ weekday }));
    });
  } else if (daysOfYear) {
    //Every month on the specified days

    for (let x = 0; x < 2; x++) {
      while (!daysOfYear.includes(now.ordinal)) {
        now = now.plus({ day: 1 });
      }
      addToDates(now);
      now = now.plus({ day: 1 });
    }
  } else if (daysOfMonth) {
    //Every month on the specified days
    for (let x = 0; x < 2; x++) {
      if (monthsOfYear) {
        while (!monthsOfYear.includes(now.month)) {
          now = now.plus({ month: 1 }).set({ day: 1 });
        }
      }
      while (
        !daysOfMonth.includes(now.day) &&
        !(daysOfMonth.includes(-1) && now.day === now.endOf("month").day)
      ) {
        now = now.plus({ day: 1 });
        if (monthsOfYear) {
          while (!monthsOfYear.includes(now.month)) {
            now = now.plus({ month: 1 }).set({ day: 1 });
          }
        }
      }
      addToDates(now);
      now = now.plus({ day: 1 });
    }
  } else if (daysOfWeek) {
    //On these days in these months
    for (let x = 0; x < 2; x++) {
      if (monthsOfYear) {
        while (!monthsOfYear.includes(now.month)) {
          now = now.plus({ month: 1 }).set({ day: 1 });
        }
      }
      while (!daysOfWeek.includes(now.weekday)) {
        now = now.plus({ day: 1 });
        if (monthsOfYear) {
          while (!monthsOfYear.includes(now.month)) {
            now = now.plus({ month: 1 }).set({ day: 1 });
          }
        }
      }
      addToDates(now);
      now = now.plus({ day: 1 });
    }
  } else if (dayInterval) {
    if (!startingOn) throw new Error("weekInterval requires startingOn");
    let start = DateTime.fromJSDate(startingOn).setZone(timezone);
    now = now.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    while (start.diff(now).valueOf() < 0) {
      start = start.plus({ day: dayInterval });
    }
    addToDates(start);
    addToDates(start.plus({ day: dayInterval }));
    addToDates(start.plus({ day: dayInterval * 2 }));
  } else {
    //Every day in these months
    for (let x = 0; x < 2; x++) {
      if (monthsOfYear) {
        while (!monthsOfYear.includes(now.month)) {
          now = now.plus({ month: 1 }).set({ day: 1 });
        }
      }
      addToDates(now);
      if (!monthsOfYear || monthsOfYear.includes(now.plus({ day: 1 }).month)) {
        addToDates(now.plus({ day: 1 }));
        break;
      } else now = now.plus({ month: 1 }).set({ day: 1 });
    }
  }
  //Sort all the dates and get least-greatest compared to today
  const sortedDates = potentialDates.sort();
  const nowISO = DateTime.fromJSDate(nowDate).setZone(timezone).toISO();
  const nextDate = sortedDates.find((iso) => iso > nowISO);
  if (nextDate) {
    if (endingOn && new Date(nextDate).valueOf() > endingOn.valueOf()) {
      throw "Next date is after endingOn";
    }
    return new Date(nextDate);
  } else {
    throw "No next date available";
  }
}
/**
 * Interface for defining a schedule for delayed intervals
 */
export interface IntervalSchedule {
  /**
   * Time zone to define local time rule (e.g. daylight savings)
   */
  timezone: string;
  /**
   * Starting date for this schedule (matters for dayInterval and weekInterval)
   */
  startingOn?: Date;
  /**
   * Ending date for this schedule
   */
  endingOn?: Date;
  /**
   * Hours (in local time) on which this schedule should fire
   */
  hours: number[];
  /**
   * Minutes on which this should fire (e.g. [0, 30] for on the hour and half-hour) (default [0])
   */
  minutes?: number[];
  /** Seconds on which this should file (default [0]) */
  seconds?: number[];
  /** Months of the year on which this should fire. Not compatible with dayInterval, weekInterval, daysOfYear */
  monthsOfYear?: number[];
  /** Days of the month on which this should fire. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfYear */
  daysOfMonth?: number[];
  /** Days of the week (specified as 0-6, where 0 is Sunday and 6 is Saturday). Not compatible with dayInterval, weekInterval, daysOfYear, daysOfMonth */
  daysOfWeek?: number[];
  /** Days of the year on which this should fire. E.g. to run on the 88th day of the year, specify `[88]`. Note that not all months have >28 days. Not compatible with dayInterval, weekInterval, daysOfWeek */
  daysOfYear?: number[];
  /** Weeks to wait between runs, starting from the startsOn date. This can run multiple times per day or on multiple weekdays based on daysOfWeek. Not compatible with dayInterval, monthsOfYear, daysOfYear */
  weekInterval?: number;
  /** Order of the weekday to fire. For example, to run on the first friday, use `{orderInMonth: [1], daysOfWeek:[5]}`. Note that using this requires specifying `daysOfWeek`. Not compatibile with dayInterval, weekInterval, daysOfMonth, daysOfYear */
  orderInMonth?: number[];
  /** Days to wait between runs, starting from the startsOn date. This can run multiple times per day if `hour`, `minute` or `second` are set with multiple values.Not compatible with weekInterval, monthsOfYear, daysOfYear */
  dayInterval?: number;
}
/**
 * Assert-style validator of whether a given IntervalSchedule contains valid values. Throws if not
 * @param schedule IntervalSchedule to test
 */
export function validateSchedule(schedule: IntervalSchedule): void {
  const {
    timezone,
    startingOn,
    endingOn,
    hours,
    minutes,
    seconds,
    monthsOfYear,
    daysOfMonth,
    daysOfWeek,
    daysOfYear,
    orderInMonth,
    weekInterval,
    dayInterval,
  } = schedule;
  if (endingOn && !(endingOn instanceof Date))
    throw new Error("If set, endingOn must be a date");
  if (startingOn && !(startingOn instanceof Date))
    throw new Error("If set, startingOn must be a date");
  if (!isValidTimeZone(timezone)) {
    throw new Error("Invalid schedule - no timezone set");
  }
  if (!hours.length) throw new Error("hours array must have at least one hour");
  hours.map((hour) => {
    if (!HOURS.includes(hour))
      throw new Error("Hour must be an integer between 0 and 23 inclusive");
  });
  if (seconds) {
    if (!seconds.length) {
      throw new Error("Seconds array must have at least one second defined");
    }
    seconds.map((second) => {
      if (!SECONDS.includes(second))
        throw new Error(
          "Second must be a whole number between 0 and 59 inclusive"
        );
    });
  }
  if (minutes) {
    if (!minutes.length) {
      throw new Error("Minutes array must have at least one minute defined");
    }
    minutes.map((minute) => {
      if (!MINUTES.includes(minute))
        throw new Error("Minute must be between 0 and 59 inclusive");
    });
  }
  if (daysOfMonth) {
    if (!daysOfMonth.length) {
      throw new Error("daysOfMonth array must contain values");
    }
    if (daysOfYear || daysOfWeek || orderInMonth) {
      throw new Error(
        "Invalid schedule - cannot mix daysOfMonth with daysOfWeek or orderInMonth"
      );
    }
    daysOfMonth.forEach((day) => {
      if (!DAYSOFMONTH.includes(day)) {
        throw new Error(
          "Day must be between 1 and 31 inclusive, or -1 for the last day of the month. Tested value is " +
            day
        );
      }
    });
  }
  if (daysOfWeek) {
    if (!daysOfWeek.length) {
      throw new Error("daysOfWeek array must contain values");
    }
    daysOfWeek.forEach((dow) => {
      if (!Object.values(DAYSOFWEEK).includes(dow))
        throw new Error(
          "Day of week must be an integer between 0 and 6 inclusive"
        );
    });
  }
  if (orderInMonth) {
    if (!orderInMonth.length) {
      throw new Error("orderInMonth array must contain values");
    }
    orderInMonth.forEach((order) => {
      if (!ORDERINMONTH.includes(order)) {
        throw new Error(
          "orderInMonth must be an integer between 1 and 5 inclusive, or -1 for last"
        );
      }
    });
    if (daysOfMonth || daysOfYear || weekInterval) {
      throw new Error(
        "Invalid schedule - cannot mix orderinmonth with daysOfMonth, daysOfYear or weekInterval"
      );
    }
    if (!daysOfWeek) {
      throw new Error(
        "Invalid schedule - must specify daysOfWeek when using orderInMonth"
      );
    }
  }
  if (weekInterval) {
    if (
      dayInterval ||
      daysOfMonth ||
      daysOfYear ||
      orderInMonth ||
      monthsOfYear
    ) {
      throw new Error(
        "Invalid schedule - cannot mix weekInterval with dayInterval, daysOfMonth, daysOfYar or orderInmonth"
      );
    }
    if (!daysOfWeek) {
      throw new Error(
        "Invalid schedule - week interval must include at least one day of week to run on"
      );
    }
    if (!WEEKINTERVALS.includes(weekInterval)) {
      throw new Error("weekInterval must be between 1 and 100 inclusive");
    }
    if (!startingOn)
      throw new Error("weekInterval requires startingOn for reference");
  }
  if (dayInterval) {
    if (
      daysOfWeek ||
      daysOfMonth ||
      daysOfYear ||
      orderInMonth ||
      monthsOfYear
    ) {
      throw new Error(
        "Invalid schedule - cannot mix dayInterval with weekInterval, daysOfMonth, daysOfYear, orderInMonth, monthsOfYear"
      );
    }
    if (!DAYINTERVALS.includes(dayInterval)) {
      throw new Error("dayInterval must be between 1 and 1000 inclusive");
    }
    if (!startingOn)
      throw new Error("dayInterval requires startingOn for reference");
  }
  if (daysOfYear) {
    if (!daysOfYear.length) {
      throw new Error("daysOfYear must contain at least one day");
    }
    if (daysOfMonth || monthsOfYear || daysOfWeek) {
      throw new Error(
        "Invalid schedule - cannot mix daysOfYear with other date considerations"
      );
    }
    daysOfYear.map((doy) => {
      if (!DAYSOFYEAR.includes(doy)) {
        throw new Error(
          "Day of year must be an integer between 1 and 366 inclusive"
        );
      }
    });
  }
}
/**
 * Determines whether a given string is a valid/known timezone identifier
 * @param tz Source string (e.g. `America/New_York`)
 * @returns True if the string is a valid time zone, false if not
 */
export function isValidTimeZone(tz: string): boolean {
  if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
    throw "Time zones are not available in this environment";
  }
  try {
    Intl.DateTimeFormat(undefined, { timeZone: tz });
    return true;
  } catch (e) {
    return false;
  }
}
const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;
const JANUARY = 1;
const FEBRUARY = 2;
const MARCH = 3;
const APRIL = 4;
const MAY = 5;
const JUNE = 6;
const JULY = 7;
const AUGUST = 8;
const SEPTEMBER = 9;
const OCTOBER = 10;
const NOVEMBER = 11;
const DECEMBER = 12;
const LASTDAY = -1;
/**
 * Valid days of the month (1-31), including last possible day of the month (-1)
 * Note: Not all months have the same number of days
 */
const DAYSOFMONTH = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  LASTDAY,
];
/** Valid days of the week by name (valid values 0-6) */
export const DAYSOFWEEK = {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
};
/**
 * Months of the year by name (valid values 1-12)
 */
export const MONTHSOFYEAR = {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
};
/**
 * Valid order in a month for a weekday (e.g. 3rd Friday).
 * Note: LASTDAY of -1 when you want the last of that weeekday (e.g. last Monday of the month)
 */
export const ORDERINMONTH = [1, 2, 3, 4, 5, LASTDAY];
/** Valid  hours of the day 0-23 */
export const HOURS = [...Array(24).keys()];
/** Valid minutes 0-59 */
export const MINUTES = [...Array(60).keys()];
/** Valid seconds 0-59 */
export const SECONDS = [...Array(60).keys()];
/** Valid days of the year 1-366 */
export const DAYSOFYEAR = [...Array.from(Array(367).keys()).slice(1)];
/**
 * Valid day intervals 1-1000
 */
export const DAYINTERVALS = [...Array.from(Array(1001).keys()).slice(1)];
/**
 * Valid week intervals 1-100
 */
export const WEEKINTERVALS = [...Array.from(Array(101).keys()).slice(1)];
