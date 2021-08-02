import React, { useContext, createContext, useState } from 'react';

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
	const [gameOver, setGameOver] = useState(false);
	const [gameOwn, setGameOwn] = useState(false);
	const [score, setScore] = useState(0);
	const [cellMoving, setCellMoving] = useState(false);
	const [gameData, setGameData] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);
	const [gameClass, setGameClass] = useState([
		[
			{ from: [0, 0], to: [0, 0] },
			{ from: [0, 1], to: [0, 1] },
			{ from: [0, 2], to: [0, 2] },
			{ from: [0, 3], to: [0, 3] },
		],
		[
			{ from: [1, 0], to: [1, 0] },
			{ from: [1, 1], to: [1, 1] },
			{ from: [1, 2], to: [1, 2] },
			{ from: [1, 3], to: [1, 3] },
		],
		[
			{ from: [2, 0], to: [2, 0] },
			{ from: [2, 1], to: [2, 1] },
			{ from: [2, 2], to: [2, 2] },
			{ from: [2, 3], to: [2, 3] },
		],
		[
			{ from: [3, 0], to: [3, 0] },
			{ from: [3, 1], to: [3, 1] },
			{ from: [3, 2], to: [3, 2] },
			{ from: [3, 3], to: [3, 3] },
		],
	]);
	const defaultClass = [
		[
			{ from: [0, 0], to: [0, 0] },
			{ from: [0, 1], to: [0, 1] },
			{ from: [0, 2], to: [0, 2] },
			{ from: [0, 3], to: [0, 3] },
		],
		[
			{ from: [1, 0], to: [1, 0] },
			{ from: [1, 1], to: [1, 1] },
			{ from: [1, 2], to: [1, 2] },
			{ from: [1, 3], to: [1, 3] },
		],
		[
			{ from: [2, 0], to: [2, 0] },
			{ from: [2, 1], to: [2, 1] },
			{ from: [2, 2], to: [2, 2] },
			{ from: [2, 3], to: [2, 3] },
		],
		[
			{ from: [3, 0], to: [3, 0] },
			{ from: [3, 1], to: [3, 1] },
			{ from: [3, 2], to: [3, 2] },
			{ from: [3, 3], to: [3, 3] },
		],
	];
	return (
		<GameContext.Provider
			value={{
				gameOver,
				setGameOver,
				gameOwn,
				setGameOwn,
				gameData,
				setGameData,
				score,
				setScore,
				gameClass,
				setGameClass,
				defaultClass,
				cellMoving,
				setCellMoving,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGameContext = () => useContext(GameContext);
