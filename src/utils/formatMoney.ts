export const formatMoney = (money: number) => {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixIndex = Math.floor(Math.log10(money) / 3);
  const suffix = suffixes[suffixIndex];
  const scaledCount = money / Math.pow(10, suffixIndex * 3);
  const formattedCount = scaledCount.toFixed(1).replace(".", ","); // Замена точки на запятую

  // Убираем ",0" из конца, если это целое число
  const finalCount = formattedCount.endsWith(",0")
    ? formattedCount.slice(0, -2)
    : formattedCount;

  return finalCount + suffix;
};
