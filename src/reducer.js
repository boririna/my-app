import { initialBoard } from './constants';

const initialState = {
	nextTurnSymbol: 'X',
	board: initialBoard,
	draw: false,
	winner: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CHANGE_TURN_SYMBOL': {
			return {
				...state,
				nextTurnSymbol: payload,
			};
		}
		case 'SET_WINNER': {
			return {
				...state,
				winner: payload,
			};
		}
		case 'SET_DRAW': {
			return {
				...state,
				draw: payload,
			};
		}
		case 'SET_BOARD': {
			return {
				...state,
				board: payload,
			};
		}
		case 'RESET': {
			return initialState;
		}
		default:
			return state;
	}
};
