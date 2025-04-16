export const clamp = (value: number | undefined, low: number, high: number, def: number) => {
  if (value === undefined) {
    value = def;
  }
  if (value < low) {
    value = low;
  }
  if (value > high) {
    value = high;
  }
  return value;
};
