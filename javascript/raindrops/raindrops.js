//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let result = '';
  let factorOfThree = number % 3 === 0;
  let factorOfFive = number % 5 === 0;
  let factorOfSeven = number % 7 === 0;
  if (factorOfThree) {
		result += 'Pling';
	}
	if (factorOfFive) {
		result += 'Plang';
	}
	if (factorOfSeven) {
		result += 'Plong';
	}
	if (!(factorOfThree || factorOfFive || factorOfSeven)) {
		result = number.toString();
	}
  return result;
};
