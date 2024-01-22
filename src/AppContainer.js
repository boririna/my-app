import './App.css';

import { AppLayout } from './AppLayout';
import { isDraw, isWinner } from './utils/check';
// import { board as initialBoard } from './constants';
import { store } from './store';
import { useState } from 'react';

export const AppContainer = () => {
	// usf
	// enf edf
	const [render, setRender] = useState(0);

	const nextTurnSymbol = store.getState().nextTurnSymbol;
	const winner = store.getState().winner;
	const draw = store.getState().draw;
	const board = store.getState().board;

	const handleClick = (ind) => {
		const nextTurnSymbol = store.getState().nextTurnSymbol;
		const winner = store.getState().winner;
		const draw = store.getState().draw;
		const board = store.getState().board;
		setRender(render + 1);

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

	store.subscribe(() => handleClick);

	const handleReset = () => {
		store.dispatch({
			type: 'RESET',
		});
		setRender(0);
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
