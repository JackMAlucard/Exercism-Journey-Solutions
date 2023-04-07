//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const isPaired = (string) => {
	let braces = new Array();
	for (let i = 0; i < string.length; i++) {
		if (string[i] === '{') braces.push('{');
		else if (string[i] === '[') braces.push('[');
		else if (string[i] === '(') braces.push('(');
		else {
			if (string[i] === '}') {
				if (braces.length === 0) return false;
				if (braces[braces.length - 1] === '{') braces.pop();
				else return false;
			}
			if (string[i] === ']') {
				if (braces.length === 0) return false;
				if (braces[braces.length - 1] === '[') braces.pop();
				else return false;
			}
			if (string[i] === ')') {
				if (braces.length === 0) return false;
				if (braces[braces.length - 1] === '(') braces.pop();
				else return false;
			}
		}
	}
	if (braces.length > 0) return false;
	return true;
};
