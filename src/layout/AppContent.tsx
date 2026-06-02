import { Select, Card, Flex, Layout } from 'antd';
import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppContent({ cryptoList, cryptoListPurchased }: Props) {
	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		lineHeight: '120px',
		color: '#fff',
		backgroundColor: '#23292F',
		padding: '50px 30px',
	};

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<Layout.Content style={contentStyle}>
			{cryptoListPurchased?.map((item, i) => (
				<Card
					size="small"
					title={item.name}
					extra={<a href="#">More</a>}
					style={{ width: '100%', textAlign: 'left', marginBottom: 20 }}>
					<Flex className="balance-cash" justify={'space-between'}>
						<div>Balance</div>
						<div>$900 ↗️</div>
					</Flex>
					<Flex className="balance-cash" justify={'space-between'}>
						<div>Balance</div>
						<div>$550 ↘️</div>
					</Flex>
					<Flex className="profit" justify={'space-between'}>
						<div>Profit</div>
						<div>25%</div>
					</Flex>
					<Flex className="amount" justify={'space-between'}>
						<div>Amount</div>
						<div>{item.amount}</div>
					</Flex>
				</Card>
			))}

			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
					{ value: 'lucy', label: 'Lucy' },
					{ value: 'Yiminghe', label: 'yiminghe' },
					{ value: 'disabled', label: 'Disabled', disabled: true },
				]}
			/>
		</Layout.Content>
	);
}
