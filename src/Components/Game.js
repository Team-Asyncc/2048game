import React, { useEffect } from 'react';
import '../styles/game.scss';
import Cell from './Cell';
import { deepClone } from '../utils/deepClone';
import { useGameContext } from '../context/GameContext';
import { addNumber } from '../utils/addNumber';
import { useEvent } from '../utils/useEvent';

import {
	swipeDown,
	swipeLeft,
	swipeRight,
	swipeUp,
} from '../utils/swipeFunctions';

const UP_ARROW = 38;
const DOWN_ARROW = 40;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const Game = () => {
	const { gameData, setGameData } = useGameContext();

	const initilizeGame = () => {
		let newGrid = deepClone(gameData);
		addNumber(newGrid);
		addNumber(newGrid);
		setGameData(newGrid);
	};
	useEffect(() => {
		initilizeGame();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleKeyDown = (event) => {
		if (false) {
			return; // game over condition
		}
		switch (event.keyCode) {
			case UP_ARROW:
				// alert("up");
				console.table('up');
				setGameData(swipeUp(gameData));
				// console.table(data);
				break;
			case DOWN_ARROW:
				console.table('down');
				setGameData(swipeDown(gameData));
				// console.table(data);
				break;
			case LEFT_ARROW:
				console.table('left');
				setGameData(swipeLeft(gameData));
				// console.table(data);
				break;
			case RIGHT_ARROW:
				console.table('right');
				setGameData(swipeRight(gameData));
				// console.table(data);
				break;
			default:
				break;
		}
	};

	useEvent('keydown', handleKeyDown);

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
