#!/usr/bin/env node
import commander from "commander";
import { DateTime } from "luxon";
import { IntervalSchedule, getNextDate, validateSchedule } from "./index";
const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const monthsOfYear = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
commander.description(
  "Get the next scheduled time based on the provided interval"
);
commander.option("--hour <hour...>", "Set hour on which this should fire");
commander.option(
  "--minute <minute...>",
  "Set minute on which this should fire"
);
commander.option(
  "--second <second...>",
  "Set second on which this should file"
);
// commander.option();
commander.option(
  "--timezone <timezone>",
  "Timezone for this",
  Intl.DateTimeFormat().resolvedOptions().timeZone
);
commander.option(
  "--reference-date <isoDate>",
  "ISO-8601 representation of the reference",
  new Date().toISOString()
);
commander.option(
  "--starting-date <isoDate>",
  "ISO-8601 representation of the date the interval had started",
  new Date().toISOString()
);
commander.option(
  "--ending-date <isoDate>",
  "ISO-8601 representation of the date the interval had ended",
  new Date().toISOString()
);
commander.option(
  "--dayOfMonth <daynumber...>",
  "Day of the month to run 1-31 (note that not all months have >28 days)"
);
commander.option(
  "--dayOfWeek <dayofweek...>",
  "Day of the week to run, either a number from 0-6 one of " +
    daysOfWeek.join(", ")
);
commander.option(
  "--monthOfYear <month...>",
  "Month of the year to run in, either a number from 1-12 one of " +
    monthsOfYear.join(", ")
);
commander.option(
  "--orderInMonth <weekNumber...>",
  "Ordinal of the day of week within month to run, e.g. 2 and setting day of week to friday is second friday of the month"
);
commander.option(
  "--dayOfYear <dayNumber...>",
  "Ordinal day of the year e.g. on ther 120th day of the year is 120"
);
commander.option(
  "--weekInterval <weeks>",
  "Number of weeks between each event"
);
commander.option("--dayInterval <days>", "Number of days between each event");
commander.option("--maxDates <limit>", "Number of dates to return", "2");
commander.option(
  "--verbose",
  "Use human-readable version of the date as output (default is ISO-8601)"
);
commander.parse(process.argv);
if (!commander.isDocumenting) {
  const opts = commander.opts();
  const {
    hour,
    minute,
    second,
    timezone,
    referenceDate,
    startingDate,
    endingDate,
    dayOfMonth,
    dayOfWeek,
    monthOfYear,
    maxDates,
    orderInMonth,
    dayOfYear,
    weekInterval,
    dayInterval,
    verbose,
  } = opts;

  try {
    const schedule: IntervalSchedule = {
      hours: (Array.isArray(hour)
        ? hour
        : [DateTime.now().hour]
      ).map((h: string) => parseInt(h)),
      minutes: (Array.isArray(minute)
        ? minute
        : [DateTime.now().minute]
      ).map((m: string) => parseInt(m)),
      seconds: (Array.isArray(second)
        ? second
        : [DateTime.now().second]
      ).map((s: string) => parseInt(s)),
      daysOfMonth: dayOfMonth && dayOfMonth.map((s: string) => parseInt(s)),
      daysOfWeek:
        dayOfWeek &&
        dayOfWeek.map((dow: string) => {
          const parsed = parseInt(dow);
          if (isNaN(parsed)) {
            const found = daysOfWeek.indexOf(dow.toLowerCase());
            if (found < 0)
              throw new Error(
                "day of week " +
                  dow +
                  " was not in the valid list: " +
                  daysOfWeek.join(", ")
              );
            return found;
          } else {
            if (parsed < 0 || parsed > 6)
              throw new Error(
                "Day of week number must be between 0 and 6 inclusive"
              );
            return parsed;
          }
        }),
      monthsOfYear:
        monthOfYear &&
        monthOfYear.map((month: string) => {
          const parsed = parseInt(month);
          if (isNaN(parsed)) {
            const found = monthsOfYear.indexOf(month.toLowerCase()) + 1;
            if (!found) {
              throw new Error(
                "Month " +
                  month +
                  " was not in the valid list: " +
                  monthsOfYear.join(", ")
              );
            }
            return found;
          } else {
            if (parsed < 1 || parsed > 12)
              throw new Error(
                "Month number must be between 1 and 12 inclusive"
              );
            return parsed;
          }
        }),
      orderInMonth:
        orderInMonth && orderInMonth.map((order: string) => parseInt(order)),
      daysOfYear: dayOfYear && dayOfYear.map((doy: string) => parseInt(doy)),
      weekInterval,
      dayInterval,
      timezone,
      endingOn: endingDate,
      startingOn: startingDate,
    };
    //   if (verbose) console.log(schedule);
    validateSchedule(schedule);

    let nextDate = new Date(referenceDate);
    const out: string[] = [];
    for (let x = 0; x < maxDates; x++) {
      nextDate = getNextDate(schedule, new Date(nextDate));
      out.push(
        verbose
          ? DateTime.fromJSDate(nextDate).toLocaleString(
              DateTime.DATETIME_HUGE_WITH_SECONDS
            )
          : nextDate.toISOString()
      );
    }
    console.log(JSON.stringify(out, null, 2));
  } catch (e) {
    if (verbose) console.error(e);
    else console.error(e.message);
    process.exit(1);
  }
}
export { commander };
