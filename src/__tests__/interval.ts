import { validateSchedule, isValidTimeZone, getNextDate, MAY, JULY } from "../";
describe("isValidTimeZone", () => {
  it("America/New_York should succeed", () =>
    expect(isValidTimeZone("America/New_York")).toBe(true));
  it("America/New_Amsterdam should fail", () =>
    expect(isValidTimeZone("America/New_Amsterdam")).toBe(false));
  it("Check missing intl", () => {
    const i = Intl;
    //@eslint-disable-line @ts-ignore-line  @eslint-disable-next-line
    (<{ Intl: undefined }>(<unknown>global)).Intl = undefined;
    expect(() => isValidTimeZone("America/New_York")).toThrow();
    // @eslint-disable-line @ts-ignore @eslint-disable-next-line
    global.Intl = i;
  });
});
describe("validateSchedule", () => {
  it("isDefined", () => {
    expect(validateSchedule).toBeDefined();
  });
  it("blankHours", () => {
    expect(() =>
      validateSchedule({ hours: [], timezone: "Bibble Bob" })
    ).toThrow();
  });
  it("badHours", () => {
    expect(() =>
      validateSchedule({ hours: [-1], timezone: "Bibble Bob" })
    ).toThrow();
    expect(() =>
      validateSchedule({ hours: [1.5], timezone: "Bibble Bob" })
    ).toThrow();
  });
  it("badTZ", () => {
    expect(() =>
      validateSchedule({ hours: [8], timezone: "Bibble Bob" })
    ).toThrow();
  });
  it("badEndingOn", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [1],
        endingOn: <Date>(<unknown>"bobb"),
      });
    }).toThrow();
  });
  it("emptyHours", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [],
      });
    }).toThrow();
  });
  it("emptyHoursArray", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [1],
        startingOn: <Date>(<unknown>"bobb"),
      });
    }).toThrow();
  });
  it("tooHighHour", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [1, 2, 24],
      });
    }).toThrow();
  });
  it("tooLowHour", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [1, 2, -1],
      });
    }).toThrow();
  });
  it("nonWholeHour", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [1, 2, 1.3],
      });
    }).toThrow();
  });
  it("emptyMinutes", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        minutes: [],
      });
    }).toThrow();
  });
  it("tooHighMinute", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        minutes: [1, 2, 60],
      });
    }).toThrow();
  });
  it("tooLowMinute", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [23],
        minutes: [1, 2, -1],
      });
    }).toThrow();
  });
  it("nonWholeMinute", () => {
    expect(() => {
      validateSchedule({
        hours: [14],
        timezone: "America/New_York",
        minutes: [1, 2, 1.3],
      });
    }).toThrow();
  });
  it("emptySeconds", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        seconds: [],
      });
    }).toThrow();
  });
  it("tooHighSecond", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        seconds: [1, 2, 60],
      });
    }).toThrow();
  });
  it("tooLowSecond", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [23],
        seconds: [1, 2, -1],
      });
    }).toThrow();
  });
  it("nonWholeSecond", () => {
    expect(() => {
      validateSchedule({
        hours: [14],
        timezone: "America/New_York",
        seconds: [1, 2, 1.3],
      });
    }).toThrow();
  });
  it("emptyOrderInMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [],
      });
    }).toThrow();
  });
  it("emptyDaysOfMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfMonth: [],
      });
    }).toThrow();
  });
  it("badDaysOfMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfMonth: [32],
      });
    }).toThrow();
  });
  it("emptyDaysOfYear", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfYear: [],
      });
    }).toThrow();
  });
  it("badDaysOfYear", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfYear: [-3],
      });
    }).toThrow();
  });
  it("mixDaysOfYearWithDaysOfMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfYear: [-3],
        daysOfWeek: [3],
      });
    }).toThrow();
  });
  it("emptyDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfWeek: [],
      });
    }).toThrow();
  });
  it("orderInMonthWithDaysOfMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [1],
        daysOfMonth: [2],
      });
    }).toThrow();
  });
  it("orderInMonthWithDaysOfYear", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [1],
        daysOfYear: [2],
      });
    }).toThrow();
  });
  it("orderInMonthWithoutDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [1],
      });
    }).toThrow();
  });
  it("badOrderInMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [72],
        daysOfWeek: [4, 5],
      });
    }).toThrow();
  });
  it("badDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        orderInMonth: [2],
        daysOfWeek: [4.3, 5],
      });
    }).toThrow();
  });
  it("weekIntervalWithDayInterval", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        weekInterval: 2,
        dayInterval: 4,
      });
    }).toThrow();
  });
  it("weekIntervalWithoutDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        weekInterval: 2,
      });
    }).toThrow();
  });
  it("weekIntervalWithoutStartingOn", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        weekInterval: 2,
        daysOfWeek: [3],
      });
    }).toThrow();
  });
  it("nonWholeweekInterval", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfWeek: [4],
        weekInterval: 2.1,
      });
    }).toThrow();
  });
  it("dayIntervalWithDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfWeek: [2],
        dayInterval: 4,
      });
    }).toThrow();
  });
  it("nonWholeDayInterval", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        dayInterval: 2.1,
      });
    }).toThrow();
  });
  it("dayIntervalWithoutStartingDate", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        dayInterval: 2,
      });
    }).toThrow();
  });
  it("daysOfMonthPlusDaysOfWeek", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfMonth: [2],
        daysOfWeek: [3],
      });
    }).toThrow();
  });
  it("daysOfYearAndDaysOfMonth", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfMonth: [2],
        daysOfYear: [3],
      });
    }).toThrow();
  });
});
describe("getNextDate", () => {
  const referenceDate = new Date("2020-03-31T17:00:00Z"); // 3/31/20 1pm EDT
  const yesterday = new Date("2020-03-30T17:00:00Z");
  // const weekago = new Date("2020-03-24T17:00:00Z");
  const weekagoyesterday = new Date("2020-03-23T17:00:00Z");
  const hours = [8];
  const timezone = "America/New_York";
  it("Monthly schedule based on days of week", () => {
    expect(
      getNextDate(
        { timezone, hours, orderInMonth: [4], daysOfWeek: [3] },
        referenceDate
      ).toISOString()
    ).toBe("2020-04-22T12:00:00.000Z");
  });
  it("Monthly schedule based last wednesday", () => {
    expect(
      getNextDate(
        {
          timezone,
          hours,
          orderInMonth: [-1],
          daysOfWeek: [3],
          startingOn: new Date(referenceDate),
        },
        referenceDate
      ).toISOString()
    ).toBe("2020-04-29T12:00:00.000Z");
  });
  it("Summer-only monthly schedule based on days of week", () => {
    expect(
      getNextDate(
        {
          timezone,
          hours,
          orderInMonth: [4],
          daysOfWeek: [3],
          monthsOfYear: [6, 7, 8],
        },
        referenceDate
      ).toISOString()
    ).toBe("2020-06-24T12:00:00.000Z");
  });
  it("Weekly schedule starting yesterday", () => {
    expect(
      getNextDate(
        {
          timezone,
          hours: [19],
          weekInterval: 1,
          daysOfWeek: [2],
          startingOn: weekagoyesterday,
        },
        referenceDate
      ).toISOString()
    ).toBe("2020-03-31T23:00:00.000Z");
  });
  it("Days of year schedule", () => {
    expect(
      getNextDate(
        { timezone, hours, daysOfYear: [23] },
        referenceDate
      ).toISOString()
    ).toBe("2021-01-23T13:00:00.000Z");
  });
  it("DaysOfMonth schedule", () => {
    expect(
      getNextDate(
        { hours, timezone, daysOfMonth: [4, 5], monthsOfYear: [MAY] },
        referenceDate
      ).toISOString()
    ).toBe("2020-05-04T12:00:00.000Z");
  });
  it("Last day of month schedule", () => {
    expect(
      getNextDate(
        { hours, timezone, daysOfMonth: [-1], monthsOfYear: [MAY] },
        referenceDate
      ).toISOString()
    ).toBe("2020-05-31T12:00:00.000Z");
  });
  it("DaysOfWeek schedule", () => {
    expect(
      getNextDate(
        { hours, timezone, daysOfWeek: [2], monthsOfYear: [JULY] },
        referenceDate
      ).toISOString()
    ).toBe("2020-07-07T12:00:00.000Z");
  });

  it("Daily schedule from known reference point", () => {
    expect(
      getNextDate(
        { hours, timezone },
        new Date("2020-03-31T17:00:00Z")
      ).toISOString()
    ).toBe("2020-04-01T12:00:00.000Z");
  });
  it("Daily schedule starting the previous day that should fire later today", () => {
    expect(
      getNextDate({ hours: [14], timezone }, referenceDate).toISOString()
    ).toBe("2020-03-31T18:00:00.000Z");
  });
  it("Every third day schedule starting the previous day that should fire later today", () => {
    expect(
      getNextDate(
        { hours: [14], timezone, dayInterval: 3, startingOn: yesterday },
        referenceDate
      ).toISOString()
    ).toBe("2020-04-02T18:00:00.000Z");
  });
});
