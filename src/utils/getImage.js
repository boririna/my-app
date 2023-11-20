import { cross, zero } from '../assets';

export const getImage = (cell) => {
	return <img src={cell === 'X' ? cross : zero} alt="cell" />;
};
