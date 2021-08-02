import React from 'react';
import '../styles/playbutton.scss';
// import Title from './Title'

import { useHistory } from 'react-router-dom';
const Playbutton = () => {
	const history = useHistory();
	const handlePlay = () => {
		history.push('/game');
	};
	return (
		<>
			<button className="playbtn" onClick={handlePlay}>
				Play
			</button>
		</>
	);
};

export default Playbutton;
