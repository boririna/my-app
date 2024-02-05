import './App.css';
import { AppLayout } from './AppLayout';
import { store } from './store/store';
import { useEffect, useState } from 'react';

export const AppContainer = () => {
	// usf
	// enf edf
	const [render, setRender] = useState(0);

	const handleReset = () => {
		store.dispatch({
			type: 'RESET',
		});
		setRender(0);
	};

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setRender((prev) => prev + 1);
		});

		return unsubscribe;
	}, []);

	return <AppLayout handleReset={handleReset} />;
};
