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
});
