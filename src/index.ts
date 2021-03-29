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
  startingOn: Date = new Date(),
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
  } = schedule;
  let now = DateTime.fromJSDate(nowDate).setZone(timezone);
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
      while (!daysOfMonth.includes(now.day)) {
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
  if (!timezone) {
    throw new Error("Invalid schedule - timezone is required");
  }
  if (!isValidTimeZone(timezone)) {
    throw new Error("Invalid schedule - no timezone set");
  }
  if (!hours.length) throw new Error("hours array must have at least one hour");
  hours.map((hour) => {
    if (hour < 0 || hour > 23)
      throw new Error("Hour must be between 0 and 23 inclusive");
    if (Math.floor(hour) !== hour)
      throw new Error("Hour must be a whole number between 0 and 23 inclusive");
  });
  if (seconds) {
    if (!seconds.length)
      throw new Error("Seconds array must have at least one second defined");
    seconds.map((second) => {
      if (second < 0 || second > 59)
        throw new Error("Second must be between 0 and 59 inclusive");
      if (Math.floor(second) !== second)
        throw new Error(
          "Second must be a whole number between 0 and 59 inclusive"
        );
    });
  }
  if (minutes) {
    if (!minutes.length)
      throw new Error("Minutes array must have at least one minute defined");
    minutes.map((minute) => {
      if (minute < 0 || minute > 59)
        throw new Error("Minute must be between 0 and 59 inclusive");
      if (Math.floor(minute) !== minute)
        throw new Error(
          "Minute must be a whole number between 0 and 59 inclusive"
        );
    });
  }
  if (orderInMonth && !orderInMonth.length)
    throw new Error("orderInMonth array must contain values");
  if (daysOfMonth && !daysOfMonth.length)
    throw new Error("daysOfMonth array must contain values");
  if (daysOfYear && !daysOfYear.length)
    throw new Error("daysOfYear array must contain values");
  if (daysOfWeek && !daysOfWeek.length)
    throw new Error("daysOfWeek array must contain values");

  if (orderInMonth && (daysOfMonth || daysOfYear || weekInterval))
    throw new Error(
      "Invalid schedule - cannot mix orderinmonth with daysOfMonth, daysOfYear or weekInterval"
    );
  if (orderInMonth && !daysOfWeek) {
    throw new Error(
      "Invalid schedule - must specify daysOfWeek when using orderInMonth"
    );
  }
  if (orderInMonth && !daysOfWeek) {
    throw new Error(
      "Invalid schedule - must specify daysOfWeek when using orderInMonth"
    );
  }
  if (
    weekInterval &&
    (dayInterval || daysOfMonth || daysOfYear || orderInMonth || monthsOfYear)
  )
    throw new Error(
      "Invalid schedule - cannot mix weekInterval with dayInterval, daysOfMonth, daysOfYar or orderInmonth"
    );
  if (weekInterval && !daysOfWeek) {
    throw new Error(
      "Invalid schedule - week interval must include at least one day of week to run on"
    );
  }
  if (weekInterval && Math.floor(weekInterval) !== weekInterval)
    throw new Error("weekInterval must be an integer");
  if (
    dayInterval &&
    (daysOfMonth || daysOfYear || orderInMonth || monthsOfYear)
  ) {
    throw new Error(
      "Invalid schedule - cannot mix dayInterval with weekInterval, daysOfMonth, daysOfYear, orderInMonth, monthsOfYear"
    );
  }
  if (dayInterval && Math.floor(dayInterval) !== dayInterval)
    throw new Error("dayInterval must be an integer");

  if (daysOfYear && (daysOfMonth || monthsOfYear || daysOfWeek)) {
    throw new Error(
      "Invalid schedule - cannot mix daysOfYear with other date considerations"
    );
  }
  if (daysOfMonth && (daysOfWeek || orderInMonth)) {
    throw new Error(
      "Invalid schedule - cannot mix daysOfMonth with daysOfWeek or orderInMonth"
    );
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
