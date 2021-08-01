import React from 'react';
import '../styles/cell.scss';

const Cell = ({ num }) => {
	return <div className="cell">{num ? num : ''}</div>;
};

export default Cell;
