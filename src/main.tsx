import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App.tsx';

const originalError = console.error;

console.error = (...args) => {
	if (typeof args[0] === 'string' && args[0].includes('[antd: List]')) {
		return; // Ignore this specific warning
	}
	originalError(...args);
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
