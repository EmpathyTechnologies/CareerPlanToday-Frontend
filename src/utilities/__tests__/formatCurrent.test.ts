import { formatCurrency } from "../formatCurrency";

describe("formatCurrency", () => {
  it("formats 0 correctly", () => {
    expect(formatCurrency(0)).toEqual("$0");
  });

  it("formats positive numbers correctly", () => {
    expect(formatCurrency(10)).toEqual("$10");
    expect(formatCurrency(100)).toEqual("$100");
    expect(formatCurrency(1000)).toEqual("$1,000");
    expect(formatCurrency(10000)).toEqual("$10,000");
  });

  it("formats negative numbers correctly", () => {
    expect(formatCurrency(-10)).toEqual("-$10");
    expect(formatCurrency(-100)).toEqual("-$100");
    expect(formatCurrency(-1000)).toEqual("-$1,000");
    expect(formatCurrency(-10000)).toEqual("-$10,000");
  });

  it("handles non-number inputs", () => {
    expect(formatCurrency("abc" as any)).toEqual("NaN");
    expect(formatCurrency(undefined as any)).toEqual("NaN");
  });
});
