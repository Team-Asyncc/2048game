import React, { useEffect } from 'react';
import '../styles/game.scss';
import Cell from './Cell';
import { deepClone } from '../utils/deepClone';
import { useGameContext } from '../context/GameContext';
import { addNumber } from '../utils/addNumber';
import { useEvent } from '../utils/useEvent';
import Tile from './Tile';
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
	const {
		gameData,
		setGameData,
		gameClass,
		setGameClass,
		defaultClass,
		score,
		setScore,
		setCellMoving,
	} = useGameContext();

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
				{
					const { b, score: newScore } = swipeUp(
						gameData,
						score,
						gameClass,
						setGameClass,
						setCellMoving
					);
					setGameData(b);
					setScore(newScore);
					setTimeout(() => {
						setGameClass(defaultClass);
						setCellMoving(false);
					}, 400);
					// console.table(data);
				}
				break;
			case DOWN_ARROW:
				{
					const { b, score: newScore } = swipeDown(
						gameData,
						score,
						gameClass,
						setGameClass,
						setCellMoving
					);
					setGameData(b);
					setScore(newScore);
					setTimeout(() => {
						setCellMoving(false);
						setGameClass(defaultClass);
					}, 400);
					// console.table(data);
				}
				break;
			case LEFT_ARROW:
				{
					console.table('left');
					const { newArray, score: newScore } = swipeLeft(
						gameData,
						score,
						gameClass,
						setGameClass,
						setCellMoving
					);
					setGameData(newArray);
					setScore(newScore);
					setTimeout(() => {
						setCellMoving(false);
						setGameClass(defaultClass);
					}, 400);
					// console.table(data);
				}
				break;
			case RIGHT_ARROW:
				{
					console.table('right');
					const { newArray, score: newScore } = swipeRight(
						gameData,
						score,
						gameClass,
						setGameClass,
						setCellMoving
					);
					setGameData(newArray);
					setScore(newScore);
					setTimeout(() => {
						setCellMoving(false);
						setGameClass(defaultClass);
					}, 400);
					// console.table(data);
				}
				break;
			default:
				break;
		}
	};

	useEvent('keydown', handleKeyDown);

	return (
		<div className="game__container">
			<div className="score-box">
				<div className="score-header">SCORE</div>
				<div className="score-text">{score}</div>
			</div>
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
				{gameData.map((row, rowIdx) => {
					return row.map((val, colIdx) =>
						val ? (
							<Tile
								key={rowIdx * 4 + colIdx}
								r={rowIdx}
								c={colIdx}
								value={val}
							/>
						) : null
					);
					// return null;
				})}
			</section>
		</div>
	);
};

export default Game;
