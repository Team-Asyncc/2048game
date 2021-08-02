import React from 'react';
import '../styles/cell.scss';
import { useGameContext } from '../context/GameContext';

import { getColors } from '../utils/getColor';

const Cell = ({ num }) => {
	const { cellMoving } = useGameContext();
	return (
		<>
			{cellMoving ? (
				<div style={{ backgroundColor: getColors(0) }} className="cell">
					{' '}
					{''}
				</div>
			) : (
				<div style={{ backgroundColor: getColors(num) }} className="cell">
					{num ? num : ''}
				</div>
			)}
		</>
	);
};

export default Cell;
