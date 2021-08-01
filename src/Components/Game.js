import React from 'react';
import '../styles/game.scss';
import Cell from './Cell';

import { useGameContext } from '../context/GameContext';

const Game = () => {
	const { gameData } = useGameContext();

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
