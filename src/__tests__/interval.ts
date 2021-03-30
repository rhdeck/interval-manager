import { validateSchedule, isValidTimeZone } from "../";
describe("isValidTimeZone", () => {
  // it("Check missing intl", () => {
  // const i = Intl;
  // //@eslint-disable-line @ts-ignore-line  @eslint-disable-next-line
  // global.Intl = undefined;
  // expect(() => isValidTimeZone("America/New_York")).toThrow();
  // // @eslint-disable-line @ts-ignore @eslint-disable-next-line
  // global.Intl = i;
  // });
  it("America/New_York should succeed", () =>
    expect(isValidTimeZone("America/New_York")).toBe(true));
  it("America/New_Amsterdam should fail", () =>
    expect(isValidTimeZone("America/New_Amsterdam")).toBe(false));
});
describe("Validator", () => {
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
  it("emptyDaysOfYear", () => {
    expect(() => {
      validateSchedule({
        timezone: "America/New_York",
        hours: [2],
        daysOfYear: [],
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
