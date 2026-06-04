import { useEffect, useState } from 'react';
import { request } from '../api/request';
import { message } from 'antd';

import type { CryptoItemType, CryptoItemPurchasedType, FormType } from '../types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function useData() {
	const [cryptoList, setCryptoList] = useState<CryptoItemType[]>([]);
	const [cryptoListPurchased, setCryptoListPurchased] = useState<CryptoItemPurchasedType[]>([]);
	const [loading, setLoading] = useState(true);
	const [statusForm, setStatusForm] = useState<FormStatus>('idle');
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

	async function sendFormData(values: FormType, selectedCoin: CryptoItemType) {
		setStatusForm('loading');

		try {
			await request<CryptoItemPurchasedType[]>('/cryptoPurchased', {
				method: 'POST',
				body: JSON.stringify({
					coinId: selectedCoin.coinId,
					name: selectedCoin.name,
					amount: values.amount,
					price: values.price,
					date: values.datePurchase.toISOString(),
				}),
			});

			setCryptoListPurchased((prev) => [
				...prev,
				{
					coinId: selectedCoin.coinId,
					name: selectedCoin.name,
					amount: values.amount,
					price: values.price,
					date: values.datePurchase.toISOString(),
				},
			]);

			setStatusForm('success');

			message.success('Form submitted successfully!');
			console.log('Form Data:', values);
		} catch (error) {
			setStatusForm('error');
		}
	}

	return {
		cryptoList,
		cryptoListPurchased,
		setCryptoListPurchased,
		loading,
		errorData,
		sendFormData,
		statusForm,
	};
}
