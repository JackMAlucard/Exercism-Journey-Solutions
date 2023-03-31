//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 1 Gigasecond = 10^9 seconds
// 1 second = 10^3 miliseconds
// => 1 Gigasecond = 10^12 miliseconds
const GIGASECOND_IN_MS = 10**12;

export const gigasecond = (startDate) => {
  let endDate  = new Date(startDate.getTime() + GIGASECOND_IN_MS);
  return endDate;
};
