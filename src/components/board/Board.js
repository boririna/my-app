import styles from './Board.module.css';
import { getImage } from '../../utils/getImage';

const BoardLayout = ({ board, onClick }) => {
	return (
		<div className={styles.field}>
			{board.map((cell, index) => {
				return (
					// не понятно, почему колбэк должна называться именно onClick(index). Когда назвала ее handleClick(index), не работало
					<div key={index} onClick={() => onClick(index)}>
						{cell && getImage(cell)}
					</div>
				);
			})}
		</div>
	);
};

export const BoardContainer = ({ board, onClick }) => {
	return <BoardLayout board={board} onClick={onClick} />;
};
