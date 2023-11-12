import './App.css';
import { useState } from 'react';
import { AppLayout } from './AppLayout';

export const AppContainer = () => {
	const [nextTurnSymbol, setNextTurnSymbol] = useState('x');
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [isEmptyBoardField, setIsEmptyBoardField] = useState(true);

	const handleClick = (turn, ind) => {
		console.log(ind);
		if (turn === 'x') {
			setNextTurnSymbol('o');
		}

		if (board[ind] === '') {
			board[ind] = turn;
			setBoard(board);
			setIsEmptyBoardField(false);
			console.log(board);
		}
	};

	return (
		<AppLayout
			nextTurnSymbol={nextTurnSymbol}
			board={board}
			isEmptyBoardField={isEmptyBoardField}
			onClick={handleClick}
		/>
	);
};
