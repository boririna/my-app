import PropTypes from 'prop-types';
import styles from './App.module.css';
import { BoardContainer } from './components/board/Board';
import { Info } from './components/info/Info';
import { RESET_GAME } from './store/actions';
import { useDispatch } from 'react-redux';

export const AppLayout = () => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(RESET_GAME);
	};
	return (
		<div>
			<div className={styles.game}>
				<h1>Крестики-нолики</h1>

				<Info />
				<BoardContainer />

				<div className={styles.buttonContainer}>
					<button className={styles.resetButton} onClick={handleReset}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	nextTurnSymbol: PropTypes.string,
	board: PropTypes.array,
	handleClick: PropTypes.func,
	draw: PropTypes.bool,
	winner: PropTypes.bool,
	handleReset: PropTypes.func,
};
