const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(number: number) {
  if (isNaN(number)) {
    return "NaN";
  }
  return CURRENCY_FORMATTER.format(number);
}
