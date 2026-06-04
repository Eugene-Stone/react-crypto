import type { Dayjs } from 'dayjs';

export type CryptoItemType = {
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

export type CryptoItemPurchasedType = {
	id: string;
	name: string;
	amount: number;
	price: number;
	date: string;
};

export type CryptoDataType = {
	cryptoData: CryptoItemType[];
	cryptoPurchased: CryptoItemPurchasedType[];
};
export type FormType = {
	amount: number;
	price: number;
	datePurchase: Dayjs;
};
