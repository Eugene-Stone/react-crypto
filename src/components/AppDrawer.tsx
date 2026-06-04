import { useState } from 'react';
import { Drawer, Select, Flex } from 'antd';
import useCryptoContext from '../context/useCryptoContext';
import AppForm from './AppForm';

import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	openDrawer: boolean;
	setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppDrawer({ openDrawer, setOpenDrawer }: Props) {
	const [selectedCoin, setSelectedCoin] = useState<CryptoItemType | null>(null);
	const { cryptoList, cryptoListPurchased } = useCryptoContext();

	return (
		<Drawer
			className="drawer"
			title="Adding new asset"
			closable={{ 'aria-label': 'Close Button' }}
			onClose={() => setOpenDrawer((prev) => !prev)}
			open={openDrawer}
			placement="left">
			<Select
				placeholder="Choose coin"
				style={{ width: '100%', marginBottom: 20 }}
				onSelect={(value) =>
					setSelectedCoin(cryptoList.find((item) => item.coinId === value) || null)
				}
				options={cryptoList.map((option, index) => ({
					value: option.coinId,
					label: option.name,
					icon: option.icon,
				}))}
				optionRender={(option) => (
					<Flex align="center">
						<img
							role="img"
							src={option.data.icon}
							width={20}
							style={{ marginRight: 12 }}
						/>
						{`${option.data.label}`}
					</Flex>
				)}
			/>
			{selectedCoin !== null && (
				<AppForm selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
			)}
		</Drawer>
	);
}
