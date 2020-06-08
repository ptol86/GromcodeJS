export function getDiff(startDate, endDate) {
  const diffMs = (Math.abs((new Date(startDate) - new Date(endDate))));
  // console.log(diff/1000/60/60);
  const toDayFormula = 24 * 60 * 60 * 1000; // hours * min * sec * millisec
  const daysDiff = Math.floor(Math.abs((diffMs) / toDayFormula));
  // console.log(daysDiff);
  const a = (diffMs) % toDayFormula;
  // console.log(a)
  const hoursDiff = Math.floor(a / (60 * 60 *1000));
  // console.log(hoursDiff);
  const b = a % ( 60 * 60 *1000);
  // console.log(b)
  const minutesDiff = Math.floor(b / (60 *1000));
  // console.log(minutesDiff);
  const c = b % (60 *1000);
  // console.log(c)
  const secondsDiff = Math.floor(c / 1000);
  // console.log(secondsDiff);
  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
  
}


// console.log(getDiff("January 26, 2011 13:51:50","January 26, 2021 10:30:20"));