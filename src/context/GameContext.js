import React, { useContext, createContext, useState } from 'react';

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
	const [gameOver, setGameOver] = useState(false);
	const [gameOwn, setGameOwn] = useState(false);
	const [score, setScore] = useState(0);
	const [gameData, setGameData] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

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
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export const useGameContext = () => useContext(GameContext);
