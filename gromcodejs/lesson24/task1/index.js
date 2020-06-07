
export const dayOfWeek = (date, days) => {
  const weekDays = ["Su", "Mo", "Th", "We", "Th", "Fr", "St"]
  const day = new Date(date).getDate();
  console.log(day)
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

