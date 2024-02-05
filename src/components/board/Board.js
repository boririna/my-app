import styles from './Board.module.css';
import { getImage } from '../../utils/getImage';
import { store } from '../../store/store';
import { isDraw, isWinner } from '../../utils/check';

const BoardLayout = ({ board, onClick }) => {
	return (
		<div className={styles.field}>
			{board.map((cell, index) => {
				return (
					<div key={index} onClick={() => onClick(index)}>
						{cell && getImage(cell)}
					</div>
				);
			})}
		</div>
	);
};

export const BoardContainer = () => {
	const nextTurnSymbol = store.getState().nextTurnSymbol;
	const winner = store.getState().winner;
	const draw = store.getState().draw;
	const board = store.getState().board;

	const handleClick = (ind) => {
		if (board[ind] || draw || winner) return;

		const newBoard = board.map((cell, idx) => (idx === ind ? nextTurnSymbol : cell));
		store.dispatch({
			type: 'SET_BOARD',
			payload: newBoard,
		});

		if (isWinner(newBoard, nextTurnSymbol)) {
			store.dispatch({
				type: 'SET_WINNER',
				payload: true,
			});
			return;
		}
		if (isDraw(newBoard)) {
			store.dispatch({
				type: 'SET_DRAW',
				payload: true,
			});
			return;
		}

		store.dispatch({
			type: 'CHANGE_TURN_SYMBOL',
			payload: nextTurnSymbol === 'X' ? 'O' : 'X',
		});
	};
	return <BoardLayout board={board} onClick={handleClick} />;
};
