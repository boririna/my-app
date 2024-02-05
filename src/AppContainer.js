import { useDispatch } from 'react-redux';
import './App.css';
import { AppLayout } from './AppLayout';
import { RESET_GAME } from './store/actions';

export const AppContainer = () => {
	// usf
	// enf edf

	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(RESET_GAME);
	};

	return <AppLayout handleReset={handleReset} />;
};
