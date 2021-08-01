export const deepClone = (arr) => {
	return arr.map((val, idx) => val.map((col) => col));
};
