import { store } from '../../store/store';

const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

export const InfoContainer = () => {
	const nextTurnSymbol = store.getState().nextTurnSymbol;
	const winner = store.getState().winner;
	const draw = store.getState().draw;

	const status = winner
		? `Победил ${nextTurnSymbol}`
		: draw
		? `Ничья`
		: `Ходит ${nextTurnSymbol}`;

	return <InfoLayout status={status} />;
};
