import React from 'react';
import '../styles/cell.scss';

import { getColors } from '../utils/getColor';

const Cell = ({ num }) => {
	return (
		<div style={{ backgroundColor: getColors(num) }} className="cell">
			{num ? num : ''}
		</div>
	);
};

export default Cell;
