import './styles/App.scss';
import Game from './Components/Game';
import { GameProvider } from './context/GameContext';
import FrontPage from './Components/Frontpage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<GameProvider>
				<Router>
					<Route exact path="/" component={FrontPage} />
					<Route exact path="/game" component={Game} />
				</Router>
			</GameProvider>
		</div>
	);
}

export default App;
