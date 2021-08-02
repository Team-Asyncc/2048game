import { addNumber } from './addNumber';
import { deepClone } from './deepClone';
export let score = 0;
export const swipeLeft = (grid, score) => {
	console.log('swipe left');
	let oldGrid = grid;
	let newArray = deepClone(grid);

	for (let i = 0; i < 4; i++) {
		let b = newArray[i];
		let slow = 0;
		let fast = 1;
		while (slow < 4) {
			if (fast === 4) {
				fast = slow + 1;
				slow++;
				continue;
			}
			if (b[slow] === 0 && b[fast] === 0) {
				fast++;
			} else if (b[slow] === 0 && b[fast] !== 0) {
				b[slow] = b[fast];
				b[fast] = 0;
				fast++;
			} else if (b[slow] !== 0 && b[fast] === 0) {
				fast++;
			} else if (b[slow] !== 0 && b[fast] !== 0) {
				if (b[slow] === b[fast]) {
					b[slow] = b[slow] + b[fast];
					b[fast] = 0;
					fast = slow + 1;
					score = score + b[slow];
					slow++;
				} else {
					slow++;
					fast = slow + 1;
				}
			}
		}
	}
	if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
		addNumber(newArray);
	}

	return { newArray, score };
};

export const swipeRight = (grid, score) => {
	console.log('swipe right');
	let oldData = grid;
	let newArray = deepClone(grid);

	for (let i = 3; i >= 0; i--) {
		let b = newArray[i];
		let slow = b.length - 1;
		let fast = slow - 1;
		while (slow > 0) {
			if (fast === -1) {
				fast = slow - 1;
				slow--;
				continue;
			}
			if (b[slow] === 0 && b[fast] === 0) {
				fast--;
			} else if (b[slow] === 0 && b[fast] !== 0) {
				b[slow] = b[fast];
				b[fast] = 0;
				fast--;
			} else if (b[slow] !== 0 && b[fast] === 0) {
				fast--;
			} else if (b[slow] !== 0 && b[fast] !== 0) {
				if (b[slow] === b[fast]) {
					b[slow] = b[slow] + b[fast];
					b[fast] = 0;
					fast = slow - 1;
					score = score + b[slow];
					slow--;
				} else {
					slow--;
					fast = slow - 1;
				}
			}
		}
	}
	if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
		addNumber(newArray);
	}
	return { newArray, score };
};

export const swipeDown = (grid, score) => {
	console.log('swipe down');
	console.log(grid);
	let b = deepClone(grid);
	let oldData = JSON.parse(JSON.stringify(grid));
	for (let i = 3; i >= 0; i--) {
		let slow = b.length - 1;
		let fast = slow - 1;
		while (slow > 0) {
			if (fast === -1) {
				fast = slow - 1;
				slow--;
				continue;
			}
			if (b[slow][i] === 0 && b[fast][i] === 0) {
				fast--;
			} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
				b[slow][i] = b[fast][i];
				b[fast][i] = 0;
				fast--;
			} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
				fast--;
			} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
				if (b[slow][i] === b[fast][i]) {
					b[slow][i] = b[slow][i] + b[fast][i];
					b[fast][i] = 0;
					fast = slow - 1;
					score = score + b[slow][i];
					slow--;
				} else {
					slow--;
					fast = slow - 1;
				}
			}
		}
	}
	if (JSON.stringify(b) !== JSON.stringify(oldData)) {
		addNumber(b);
	}
	return { b, score };
};

export const swipeUp = (grid, score) => {
	console.log('swipe up');
	let b = deepClone(grid);
	let oldData = JSON.parse(JSON.stringify(grid));
	for (let i = 0; i < 4; i++) {
		let slow = 0;
		let fast = 1;
		while (slow < 4) {
			if (fast === 4) {
				fast = slow + 1;
				slow++;
				continue;
			}
			if (b[slow][i] === 0 && b[fast][i] === 0) {
				fast++;
			} else if (b[slow][i] === 0 && b[fast][i] !== 0) {
				b[slow][i] = b[fast][i];
				b[fast][i] = 0;
				fast++;
			} else if (b[slow][i] !== 0 && b[fast][i] === 0) {
				fast++;
			} else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
				if (b[slow][i] === b[fast][i]) {
					b[slow][i] = b[slow][i] + b[fast][i];
					b[fast][i] = 0;
					fast = slow + 1;
					score = score + b[slow][i];
					slow++;
				} else {
					slow++;
					fast = slow + 1;
				}
			}
		}
	}
	if (JSON.stringify(oldData) !== JSON.stringify(b)) {
		addNumber(b);
	}
	return { b, score };
};
