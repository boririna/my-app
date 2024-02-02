import './App.css';
import { AppLayout } from './AppLayout';
import { store } from './store/store';
import { useState } from 'react';

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

	return <AppLayout handleReset={handleReset} />;
};
