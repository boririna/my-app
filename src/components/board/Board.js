import styles from './Board.module.css';
import { getImage } from '../../utils/getImage';
import { isDraw, isWinner } from '../../utils/check';
import { useDispatch, useSelector } from 'react-redux';
import { changeTurnSymbol, setBoard, setDraw, setWinner } from '../../store/actions';
import {
	selectBoard,
	selectDraw,
	selectNextTurnSymbol,
	selectWinner,
} from '../../store/selectors';

const BoardLayout = ({ onClick }) => {
	const board = useSelector(selectBoard);
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
	const nextTurnSymbol = useSelector(selectNextTurnSymbol);
	const winner = useSelector(selectWinner);
	const draw = useSelector(selectDraw);
	const board = useSelector(selectBoard);

	const dispatch = useDispatch();

	const handleClick = (ind) => {
		if (board[ind] || draw || winner) return;

		const newBoard = board.map((cell, idx) => (idx === ind ? nextTurnSymbol : cell));

		dispatch(setBoard(newBoard));

		if (isWinner(newBoard, nextTurnSymbol)) {
			dispatch(setWinner());
			return;
		}
		if (isDraw(newBoard)) {
			dispatch(setDraw());
			return;
		}

		dispatch(changeTurnSymbol(nextTurnSymbol));
	};

	return <BoardLayout board={board} onClick={handleClick} />;
};
