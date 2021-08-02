import { useGameContext } from '../context/GameContext';
import '../styles/animation.scss';
import { getColors } from '../utils/getColor';

const Tile = ({ value, r, c }) => {
	console.log('called');
	const { gameClass } = useGameContext();
	console.table(gameClass);
	let classArray = ['tile'];
	if (gameClass[r][c].from !== -1) {
		classArray.push(
			`row_from_${gameClass[r][c].from[0]}_to_${gameClass[r][c].to[0]}`
		);
		classArray.push(
			`column_from_${gameClass[r][c].from[1]}_to_${gameClass[r][c].to[1]}`
		);
	} else {
		return null;
	}
	console.log('called');
	let classes = classArray.join(' ');
	return (
		<span
			style={{ position: 'absolute', backgroundColor: getColors(value) }}
			className={classes}
		>
			{value}
		</span>
	);
};

export default Tile;
