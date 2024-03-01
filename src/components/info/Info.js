import { Component } from 'react';
import { connect } from 'react-redux';

const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

// export const InfoContainer = ({ nextTurnSymbol, winner, draw }) => {
// 	const status = winner
// 		? `Победил ${nextTurnSymbol}`
// 		: draw
// 		? `Ничья`
// 		: `Ходит ${nextTurnSymbol}`;

// 	return <InfoLayout status={status} />;
// };

export class InfoContainer extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const status = this.props.winner
			? `Победил ${this.props.nextTurnSymbol}`
			: this.props.draw
			? `Ничья`
			: `Ходит ${this.props.nextTurnSymbol}`;

		return <InfoLayout status={status} />;
	}
}

const mapStateToProps = (state) => ({
	nextTurnSymbol: state.nextTurnSymbol,
	winner: state.winner,
	draw: state.draw,
});

export const Info = connect(mapStateToProps)(InfoContainer);
