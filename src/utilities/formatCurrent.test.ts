import { formatCurrency } from "./formatCurrency";

test("formats 0 correctly", () => {
  expect(formatCurrency(0)).toEqual("$0");
});

test("formats positive numbers correctly", () => {
  expect(formatCurrency(10)).toEqual("$10");
  expect(formatCurrency(100)).toEqual("$100");
  expect(formatCurrency(1000)).toEqual("$1,000");
  expect(formatCurrency(10000)).toEqual("$10,000");
});

test("formats negative numbers correctly", () => {
  expect(formatCurrency(-10)).toEqual("-$10");
  expect(formatCurrency(-100)).toEqual("-$100");
  expect(formatCurrency(-1000)).toEqual("-$1,000");
  expect(formatCurrency(-10000)).toEqual("-$10,000");
});

test("handles non-number inputs", () => {
  expect(formatCurrency("abc" as any)).toEqual("NaN");
  expect(formatCurrency(undefined as any)).toEqual("NaN");
});

// Ramiro TODOS
// test for emojis
// test for foreign languages (japanese, arabic, hindi, etc.)
// test for null
// test for ""
// test for []
// test for {}
