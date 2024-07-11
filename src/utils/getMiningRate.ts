export const getMiningRate = (level: number) => {
  if (level === 0) return 0;
  const ratePerHour = 500 * Math.pow(1.5, level - 1);
  return ratePerHour / 3600;
};
