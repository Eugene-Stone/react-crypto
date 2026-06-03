import { PieChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';

import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppChart({ cryptoList, cryptoListPurchased }: Props) {
	const data = cryptoListPurchased.map((item) => {
		const cryptoItem = cryptoList.find((crypto) => crypto.id === item.id);

		return {
			group: cryptoItem?.name || item.id,
			value: cryptoItem && item.amount * cryptoItem.price,
		};
	});

	const totalAmount = cryptoListPurchased.reduce((acc, item) => {
		const cryptoItem = cryptoList.find((crypto) => crypto.id === item.id);

		if (!cryptoItem) {
			return acc;
		}

		return acc + cryptoItem.price * item.amount;
	}, 0);

	const options = {
		title: `Summary - $${totalAmount.toFixed(2)}`,
		resizable: true,

		legend: {
			alignment: 'center' as const,
		},

		pie: {
			alignment: 'center' as const,
		},

		height: '400px',
	};

	return <PieChart data={data} options={options} />;
}
