//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
	const pascalsTriangle = new Array();
	// Pascal's triangle contains n rows with indices i = 0, ..., n - 1.
  for (let i = 0; i < n; i++) {
		const row = new Array();
		// Each row has i + 1 elements with indices j = 0, ..., i.
		for (let j = 0; j < i + 1; j++) {
			// The first and last element of the row are always equal to '1'.
			if (j === 0 || j === i) {
				row.push(1);
				// The rest are equal to the sum of the two elements from the previous
				// row with the same index and the same index minus one. 
			} else {
				row.push(pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]);
			}
		}
		pascalsTriangle.push(row);
	}
  return pascalsTriangle;
};
