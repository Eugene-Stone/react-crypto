import { createContext, useState, useEffect } from 'react';
import useData from '../hooks/useData.ts';
import type { CryptoItemType, CryptoItemPurchasedType, FormType } from '../types.ts';

type CryptoContextType = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
	setCryptoListPurchased: React.Dispatch<React.SetStateAction<CryptoItemPurchasedType[]>>;
	loading: boolean;
	errorData: string | null;
	sendFormData: (values: FormType, selectedCoin: CryptoItemType) => Promise<void>;
};

const CryptoContext = createContext<CryptoContextType | null>(null);

export default function CryptoProvider({ children }: React.PropsWithChildren) {
	const {
		cryptoList,
		cryptoListPurchased,
		setCryptoListPurchased,
		loading,
		errorData,
		sendFormData,
	} = useData();

	return (
		<CryptoContext.Provider
			value={{
				cryptoList,
				cryptoListPurchased,
				setCryptoListPurchased,
				loading,
				errorData,
				sendFormData,
			}}>
			{children}
		</CryptoContext.Provider>
	);
}

export { CryptoContext };
