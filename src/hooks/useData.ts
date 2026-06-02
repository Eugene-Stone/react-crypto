import { useEffect, useState } from 'react';
import { request } from '../api/request';

type CryptoItemType = {
	id: string;
	icon: string;
	name: string;
	symbol: string;
	rank: number;
	price: number;
	priceBtc: number;
	volume: number;
	marketCap: number;
	availableSupply: number;
	totalSupply: number;
	priceChange1h: number;
	priceChange1d: number;
	priceChange1w: number;
	redditUrl: string;
	websiteUrl: string;
	twitterUrl: string;
	explorers: string[];
};

type CryptoItemPurchasedType = {
	id: string;
	amount: number;
	price: number;
	date: string;
};

type CryptoDataType = {
	cryptoData: CryptoItemType[];
	cryptoPurchased: CryptoItemPurchasedType[];
};

export default function useData() {
	const [cryptoList, setCryptoList] = useState<CryptoItemType[]>([]);
	const [cryptoListPurchased, setCryptoListPurchased] = useState<CryptoItemPurchasedType[]>([]);
	const [loading, setLoading] = useState(true);
	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		let isCancelled = false;

		async function fetchData() {
			try {
				const cryptoData = await request<CryptoItemType[]>('/cryptoData', {
					method: 'GET',
				});

				const cryptoPurchased = await request<CryptoItemPurchasedType[]>(
					'/cryptoPurchased',
					{ method: 'GET' },
				);

				if (!isCancelled) {
					setCryptoList(cryptoData);
					setCryptoListPurchased(cryptoPurchased);
				}
			} catch (error) {
				if (!isCancelled) {
					setErrorData(error as string);
				}
			} finally {
				if (!isCancelled) {
					setTimeout(() => {
						setLoading(false);
					}, 500);
				}
			}
		}

		fetchData();

		return () => {
			isCancelled = true;
		};
	}, []);

	return {
		cryptoList,
		cryptoListPurchased,
		loading,
		errorData,
	};
}
