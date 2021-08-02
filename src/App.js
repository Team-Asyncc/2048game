import './styles/App.scss';
import Game from './Components/Game';
import { GameProvider } from './context/GameContext';
// import FrontPage from './Components/Frontpage';

function App() {
	return (
		<div className="App">
			<GameProvider>
				<Game />
				{/* <FrontPage/> */}
			</GameProvider>
		</div>
	);
}

export default App;
