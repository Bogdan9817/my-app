import percentCompare from "./percentCompare";

describe("Should return ...", () => {
  test("true", () => {
    expect(percentCompare(10, 9)).toBeTruthy();
    expect(percentCompare(10, 11)).toBeTruthy();
    expect(percentCompare("10", "9")).toBeTruthy();
    expect(percentCompare("10", "11")).toBeTruthy();
  });

  test("false", () => {
    expect(percentCompare(10, 8)).toBeFalsy();
    expect(percentCompare(10, 12)).toBeFalsy();
    expect(percentCompare("10", "8")).toBeFalsy();
    expect(percentCompare("10", "8")).toBeFalsy();
    expect(percentCompare("test", "nan")).toBeFalsy();
    expect(percentCompare(10, "test")).toBeFalsy();
    expect(percentCompare("test", 8)).toBeFalsy();
    expect(percentCompare("10", "test")).toBeFalsy();
    expect(percentCompare("test", "8")).toBeFalsy();
  });
});
