import { WIN_PATTERNS } from '../constants';

export const isDraw = (board) => board.every((cell) => cell);

export const isWinner = (board, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((element) => board[element] === currentPlayer),
	);
};
