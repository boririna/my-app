import { connect } from 'react-redux';

const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

export const InfoContainer = ({ nextTurnSymbol, winner, draw }) => {
	const status = winner
		? `Победил ${nextTurnSymbol}`
		: draw
		? `Ничья`
		: `Ходит ${nextTurnSymbol}`;

	return <InfoLayout status={status} />;
};
const mapStateToProps = (state) => ({
	nextTurnSymbol: state.nextTurnSymbol,
	winner: state.winner,
	draw: state.draw,
});
export const Info = connect(mapStateToProps)(InfoContainer);
