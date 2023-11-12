import styles from './App.module.css';
import cross from './cross.png';
import zero from './zero.png';

export const AppLayout = ({ nextTurnSymbol, board, isEmptyBoardField, onClick }) => {
	// const getCell = (board, id) => {
	// 	return 'x', 'o', ''
	// }

	return (
		<div>
			<div className={styles.game}>
				<h1>Крестики-нолики</h1>
				<h2>Ходит: х</h2>
				<div
					className={styles.field}
					onClick={(event) =>
						onClick(nextTurnSymbol, event.target.getAttribute('id'))
					}
				>
					<div id="0">
						<img
							src={cross}
							alt="zero"
							className={
								isEmptyBoardField
									? styles.dontDisplaySymbol
									: styles.displaySymbol
							}
						/>
					</div>
					<div id="1">
						<img
							src={zero}
							alt="zero"
							className={
								isEmptyBoardField
									? styles.dontDisplaySymbol
									: styles.displaySymbol
							}
						/>
					</div>
					<div>x</div>
					<div>x</div>
					<div>o</div>
					<div>x</div>
					<div>x</div>
					<div>o</div>
					<div>x</div>
				</div>
			</div>
		</div>
	);
};
