const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDate = (value) => {
  const day = new Date(value);

  if (days[day.getDay()]) {
    return days[day.getDay()];
  }

  return '';
};
