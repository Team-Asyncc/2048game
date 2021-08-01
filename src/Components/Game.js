import React, { useEffect } from 'react';
import '../styles/game.scss';
import Cell from './Cell';
import { deepClone } from '../utils/deepClone';
import { useGameContext } from '../context/GameContext';
import { randomRange } from '../utils/random';

const Game = () => {
	const { gameData, setGameData } = useGameContext();
	const addNumber = (grid) => {
		let added = false;
		console.log(grid);
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
	const initilizeGame = () => {
		let newGrid = deepClone(gameData);
		addNumber(newGrid);
		addNumber(newGrid);
		setGameData(newGrid);
	};
	useEffect(() => {
		initilizeGame();
	}, []);

	return (
		<div className="game__container">
			<section className="game__board__container">
				{gameData.map((row, rowIdx) => {
					return (
						<div className="game__row" key={rowIdx}>
							{row.map((val, colIdx) => (
								<Cell num={val} key={colIdx} />
							))}
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Game;
