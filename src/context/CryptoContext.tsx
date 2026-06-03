import { createContext, useState, useEffect } from 'react';
import useData from '../hooks/useData.ts';
import type { CryptoItemType, CryptoItemPurchasedType } from '../types.ts';

type CryptoContextType = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
	loading: boolean;
	errorData: string | null;
};

const CryptoContext = createContext<CryptoContextType | null>(null);

export default function CryptoProvider({ children }: React.PropsWithChildren) {
	const { cryptoList, cryptoListPurchased, loading, errorData } = useData();

	return (
		<CryptoContext.Provider value={{ cryptoList, cryptoListPurchased, loading, errorData }}>
			{children}
		</CryptoContext.Provider>
	);
}

export { CryptoContext };
