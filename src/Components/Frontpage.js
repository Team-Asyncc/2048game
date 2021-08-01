import React from 'react';
// import Loader from './loader';
import '../styles/frontpage.scss';
import Playbutton from './Playbutton';
// import Snowflake from './Snowflake';
import Title from './Title';

const FrontPage = () => {
	const Snowflakes = require('magic-snowflakes');
	Snowflakes();
	return (
		<div className="frontpage">
			{/* <Loader /> */}
			<Title/>
			<Playbutton/>
		</div>
	);
};

export default FrontPage;