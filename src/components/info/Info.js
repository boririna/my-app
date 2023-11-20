const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

export const InfoContainer = ({ draw, winner, nextTurnSymbol }) => {
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
