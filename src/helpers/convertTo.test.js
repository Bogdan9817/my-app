import convertTo from "./convertTo";

const testObj = {
  EUR: {
    buy: 30,
    sale: 31,
  },
  USD: {
    buy: 28,
    sale: 29,
  },
};

describe("convertTo should...", () => {
  let converter;
  beforeAll(() => {
    converter = convertTo.bind(testObj);
  });
  test("return undefined", () => {
    expect(converter(null, null, null)).toBeUndefined();
    expect(converter("UAH", null, null)).toBeUndefined();
    expect(converter(null, "EUR", null)).toBeUndefined();
    expect(converter(null, null, "200")).toBeUndefined();
    expect(converter(null, null, 200)).toBeUndefined();
    expect(converter("UAH", "EUR", null)).toBeUndefined();
    expect(converter("UAH", null, "200")).toBeUndefined();
    expect(converter("UAH", null, 200)).toBeUndefined();
    expect(converter(null, "EUR", "200")).toBeUndefined();
    expect(converter(null, "EUR", 200)).toBeUndefined();
    expect(converter("", "", "")).toBeUndefined();
  });

  test("return value equal to args value", () => {
    expect(converter("UAH", "UAH", 100)).toBe(100);
    expect(converter("UAH", "UAH", "100")).toBe(100);
    expect(converter("USD", "USD", 100)).toBe(100);
    expect(converter("USD", "USD", "100")).toBe(100);
    expect(converter("EUR", "EUR", 100)).toBe(100);
    expect(converter("EUR", "EUR", 100)).toBe(100);
  });

  test("return UAH equivalent", () => {
    expect(converter("USD", "UAH", 1)).toBe(testObj.USD.buy.toFixed(4));
    expect(converter("USD", "UAH", 5)).toBe((testObj.USD.buy * 5).toFixed(4));
    expect(converter("EUR", "UAH", "1")).toBe(testObj.EUR.buy.toFixed(4));
    expect(converter("EUR", "UAH", "5")).toBe((testObj.EUR.buy * 5).toFixed(4));
  });

  test("return ccy equivalent", () => {
    expect(converter("UAH", "USD", 100)).toBe("3.4483");
    expect(converter("UAH", "USD", 290)).toBe("10.0000");
    expect(converter("UAH", "EUR", 100)).toBe("3.2258");
    expect(converter("UAH", "EUR", 310)).toBe("10.0000");
  });
  test("should convert toUAH then to args ccy", () => {
    expect(converter("USD", "EUR", 100)).toBe("90.3226");
    expect(converter("EUR", "USD", 100)).toBe("103.4483");
  });
});
