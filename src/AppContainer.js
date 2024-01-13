import './App.css';
// import { useState } from 'react';
import { AppLayout } from './AppLayout';
import { isDraw, isWinner } from './utils/check';
// import { board as initialBoard } from './constants';
import { store } from './store';

export const AppContainer = () => {
	// const [nextTurnSymbol, setNextTurnSymbol] = useState('X');
	// const [board, setBoard] = useState(initialBoard);
	// const [draw, setDraw] = useState(false);
	// const [winner, setWinner] = useState(false);
	// usf
	// enf edf
	const nextTurnSymbol = store.getState().nextTurnSymbol;
	const winner = store.getState().winner;
	const draw = store.getState().draw;
	const board = store.getState().board;

	const handleClick = (ind) => {
		if (board[ind] || draw || winner) return;

		const newBoard = board.map((cell, idx) => (idx === ind ? nextTurnSymbol : cell));
		// setBoard(newBoard);
		console.log('calling SET_BOARD ' + newBoard);
		store.dispatch({
			type: 'SET_BOARD',
			payload: newBoard,
		});
		console.log('calling SET_BOARD done');
		console.log(newBoard);

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
		console.log('calling CHANGE_TURN_SYMBOL');
		store.dispatch({
			type: 'CHANGE_TURN_SYMBOL',
			payload: nextTurnSymbol === 'X' ? 'O' : 'X',
		});
		console.log('calling CHANGE_TURN_SYMBOL done');
		// setNextTurnSymbol((prev) => (prev === 'X' ? 'O' : 'X'));
	};

	const handleReset = () => {
		// setBoard(initialBoard);
		// setNextTurnSymbol('X');
		// setDraw(false);
		// setWinner(false);
		store.dispatch({
			type: 'RESET',
		});
	};

	return (
		<AppLayout
			nextTurnSymbol={nextTurnSymbol}
			board={board}
			handleClick={handleClick}
			draw={draw}
			winner={winner}
			handleReset={handleReset}
		/>
	);
};
