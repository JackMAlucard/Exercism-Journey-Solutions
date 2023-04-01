//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Creates an object representation of a word.
 * The keys of the object are the lower case letters that appear in the word.
 * The value of each key is the number of times the letter appears in the word.
 *
 * @param {string} word
 * @returns {Obj<string, number>} object representation of word
 */
function objectRepresentationOf (word) {
	const obj = {};
	for (let i = 0; i < word.length; i++) {
		let letter = word[i].toLowerCase();
		if (!obj.hasOwnProperty(letter)) {
			obj[letter] = 0;
		}
		obj[letter] += 1;
	}
	return obj;
}

/**
 * Compares two objects representing a word.
 * If two words have the same letters and each letter appear the same number of
 * times, the two words are anagrams, excepting for when both words are 
 * the same exact string.
 *
 * @param {Obj<string, number>} object representation of first word to compare.
 * @param {Obj<string, number>} object representation of second word to compare.
 * @returns {boolean} true if the object representations of the word are equal. 
 */
function compareWordObjects(wordObject1, wordObject2) {
  const keys1 = Object.keys(wordObject1);
  const keys2 = Object.keys(wordObject2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (wordObject1[key] !== wordObject2[key]) {
      return false;
    }
  }
  return true;
}

export const findAnagrams = (target, candidates) => {
  const anagramSet = [];
  let targetAsObject = objectRepresentationOf(target);
  for (let i = 0; i < candidates.length; i++)
  {
		if (!(target.toLowerCase() === candidates[i].toLowerCase())) {
			let candidateAsObject = objectRepresentationOf(candidates[i]);
			if (compareWordObjects(targetAsObject, candidateAsObject)) {
				anagramSet.push(candidates[i]);
			}
		}
	}
  return anagramSet;
};
