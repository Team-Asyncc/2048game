import React from 'react';
import '../styles/frontpage.scss';
import Playbutton from './Playbutton';
import Title from './Title';

const FrontPage = () => {
	const Snowflakes = require('magic-snowflakes');
	const sf = new Snowflakes({
		container: document.querySelector('#snowflakes-container'),
	});
	return (
		<div className="frontpage" id="snowflakes-container">
			{/* <Loader /> */}
			<Title/>
			<Playbutton Snowflakes={Snowflakes}/>
		</div>
	);
};

export default FrontPage;