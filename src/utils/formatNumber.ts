export const formatNumber = (number: number, language = "ru-RU") => {
  return new Intl.NumberFormat(language).format(number);
};
