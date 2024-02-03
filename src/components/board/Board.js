import styles from './Board.module.css';
import { getImage } from '../../utils/getImage';
import { store } from '../../store/store';
import { useEffect, useState } from 'react';
import { isDraw, isWinner } from '../../utils/check';
import { useSelector } from 'react-redux';

const BoardLayout = () => {
	const [render, setRender] = useState(0);

	const nextTurnSymbol = useSelector((state) => state.nextTurnSymbol);
	const winner = useSelector((state) => state.winner);
	const draw = useSelector((state) => state.draw);
	const board = useSelector((state) => state.board);

	const handleClick = (ind) => {
		// setRender(render + 1);

		if (board[ind] || draw || winner) return;

		const newBoard = board.map((cell, idx) => (idx === ind ? nextTurnSymbol : cell));
		// setBoard(newBoard);
		store.dispatch({
			type: 'SET_BOARD',
			payload: newBoard,
		});

		if (isWinner(newBoard, nextTurnSymbol)) {
			// setWinner(true);
			store.dispatch({
				type: 'SET_WINNER',
				payload: true,
			});
			return;
		}
		if (isDraw(newBoard)) {
			// setDraw(true);
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

		// setNextTurnSymbol((prev) => (prev === 'X' ? 'O' : 'X'));
	};

	// useEffect(() => {
	// 	const unsubscribe = store.subscribe(() => {
	// 		setRender((prev) => prev + 1);
	// 	});

	// 	return unsubscribe;
	// }, []);

	return (
		<div className={styles.field}>
			{board.map((cell, index) => {
				return (
					// не понятно, почему колбэк должна называться именно onClick(index). Когда назвала ее handleClick(index), не работало
					<div key={index} onClick={() => handleClick(index)}>
						{cell && getImage(cell)}
					</div>
				);
			})}
		</div>
	);
};

export const BoardContainer = ({ board, onClick }) => {
	return <BoardLayout board={board} onClick={onClick} />;
};
