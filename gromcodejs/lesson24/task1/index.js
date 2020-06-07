const weekDays = ["Su", "Mo", "Th", "We", "Th", "Fr", "St"]

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day)
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

