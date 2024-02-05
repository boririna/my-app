import { useSelector } from 'react-redux';
import { selectDraw, selectNextTurnSymbol, selectWinner } from '../../store/selectors';

const InfoLayout = ({ status }) => {
	return <h2>{status}</h2>;
};

export const InfoContainer = () => {
	const nextTurnSymbol = useSelector(selectNextTurnSymbol);
	const winner = useSelector(selectWinner);
	const draw = useSelector(selectDraw);

	const status = winner
		? `Победил ${nextTurnSymbol}`
		: draw
		? `Ничья`
		: `Ходит ${nextTurnSymbol}`;

	return <InfoLayout status={status} />;
};
