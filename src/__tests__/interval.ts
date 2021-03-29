import { validateSchedule, isValidTimeZone } from "../";
describe("isValidTimeZone", () => {
  it("America/New_York should succeed", () =>
    expect(isValidTimeZone("America/New_York")).toBe(true));
  it("America/New_Amsterdam should fail", () =>
    expect(isValidTimeZone("America/New_Amsterdam")).toBe(false));
});
describe("Validator", () => {
  it("isDefined", () => {
    expect(validateSchedule).toBeDefined();
  });
});
