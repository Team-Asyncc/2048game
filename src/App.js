import './styles/App.scss';
import Game from './Components/Game';
import { GameProvider } from './context/GameContext';

function App() {
	return (
		<div className="App">
			<GameProvider>
				<Game />
			</GameProvider>
		</div>
	);
}

export default App;
