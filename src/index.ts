import { DateTime } from "luxon";
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
export interface IntervalSchedule {
  timezone: string;
  startingOn?: Date;
  endingOn?: Date;
  hours: number[];
  minutes?: number[];
  seconds?: number[];
  monthsOfYear?: number[];
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  daysOfYear?: number[];
  weekInterval?: number;
  orderInMonth?: number[];
  dayInterval?: number;
}
export function validateSchedule({
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
}: IntervalSchedule): void {
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
  hours.map((hour) => {
    if (hour < 0 || hour > 23)
      throw new Error("Hour must be between 0 and 23 inclusive");
    if (Math.floor(hour) !== hour)
      throw new Error("Hour must be a whole number between 0 and 23 inclusive");
  });
  if (seconds)
    seconds.map((second) => {
      if (second < 0 || second > 59)
        throw new Error("Second must be between 0 and 59 inclusive");
      if (Math.floor(second) !== second)
        throw new Error(
          "Second must be a whole number between 0 and 59 inclusive"
        );
    });
  if (minutes)
    minutes.map((minute) => {
      if (minute < 0 || minute > 59)
        throw new Error("Minute must be between 0 and 59 inclusive");
      if (Math.floor(minute) !== minute)
        throw new Error(
          "Minute must be a whole number between 0 and 59 inclusive"
        );
    });
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
  if (
    dayInterval &&
    (daysOfMonth || daysOfYear || orderInMonth || monthsOfYear)
  ) {
    throw new Error(
      "Invalid schedule - cannot mix dayInterval with weekInterval, daysOfMonth, daysOfYear, orderInMonth, monthsOfYear"
    );
  }
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
