export const RESET_GAME = {
	type: 'RESET_GAME',
};

export const setBoard = (newBoard) => ({
	type: 'SET_BOARD',
	payload: newBoard,
});

export const setWinner = () => ({
	type: 'SET_WINNER',
	payload: true,
});

export const setDraw = () => ({
	type: 'SET_DRAW',
	payload: true,
});

export const changeTurnSymbol = (nextTurnSymbol) => ({
	type: 'CHANGE_TURN_SYMBOL',
	payload: nextTurnSymbol === 'X' ? 'O' : 'X',
});
