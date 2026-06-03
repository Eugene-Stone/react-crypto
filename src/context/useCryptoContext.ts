import { useContext } from 'react';
import { CryptoContext } from './CryptoContext.tsx';

export default function useCryptoContext() {
	const context = useContext(CryptoContext);

	if (!context) {
		throw new Error('Error data');
	}

	return context;
}
