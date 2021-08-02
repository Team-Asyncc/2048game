import { randomRange } from './random';

export const addNumber = (grid) => {
	let added = false;
	// console.log(grid);
	while (!added) {
		let x = randomRange(0, 3);
		let y = randomRange(0, 3);
		if (grid[x][y] === 0) {
			grid[x][y] = Math.random() > 0.5 ? 2 : 4;
			added = true;
		}
	}
	return grid;
};
