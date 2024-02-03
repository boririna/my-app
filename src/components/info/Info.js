import { useEffect, useState } from 'react';
import { store } from '../../store/store';

const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

export const InfoContainer = () => {
	const [render, setRender] = useState(0);
	const nextTurnSymbol = store.getState().nextTurnSymbol;
	const winner = store.getState().winner;
	const draw = store.getState().draw;

	// useEffect(() => {
	// 	const unsubscribe = store.subscribe(() => {
	// 		setRender((prev) => prev + 1);
	// 	});

	// 	return unsubscribe;
	// }, []);

	const status = winner
		? `Победил ${nextTurnSymbol}`
		: draw
		? `Ничья`
		: `Ходит ${nextTurnSymbol}`;

	return (
		<InfoLayout
			draw={draw}
			winner={winner}
			nextTurnSymbol={nextTurnSymbol}
			status={status}
		/>
	);
};
