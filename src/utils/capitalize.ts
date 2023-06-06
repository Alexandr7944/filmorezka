export const capitalizeStr = (str: string = 'Для Вас'): string => {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}