export function getDiff(startDate, endDate) {
  const a = new Date(startDate);
  const b = new Date(endDate);
  
  const toDayFormula = 24 * 60 * 60 * 1000; // hours * min * sec * millisec
  const daysDiff = Math.floor(Math.abs((a - b) / toDayFormula));
  // console.log(daysDiff);
  const hoursDiff = Math.abs(a.getHours() - b.getHours());
  // console.log(hoursDiff);
  const minutesDiff = Math.abs(a.getMinutes() - b.getMinutes());
  // console.log(minutesDiff);
  const secondsDiff = Math.abs(a.getSeconds() - b.getSeconds());
  // console.log(secondsDiff);
  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
  
}


// console.log(getDiff("January 26, 2011 13:51:50","January 26, 2021 10:30:20"));