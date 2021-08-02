import React,{useEffect} from 'react';
import '../styles/frontpage.scss';
import Playbutton from './Playbutton';
import Title from './Title';

const FrontPage = () => {
	useEffect(() => {
		const Snowflakes = require('magic-snowflakes');
		const sf = new Snowflakes({
			container: document.querySelector('.frontpage'),
		});
	}, [])
	return (
		<div className="frontpage" id="snowflakes-container">
			<Title />
			<Playbutton />
		</div>
	);
};

export default FrontPage;
