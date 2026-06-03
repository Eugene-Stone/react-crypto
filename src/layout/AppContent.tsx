import { useState } from 'react';
import { Select, Card, Flex, Layout, Tag } from 'antd';
import AppModal from '../components/AppModal';

import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppContent({ cryptoList, cryptoListPurchased }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<CryptoItemType | null>(null);

	const showModal = (content: CryptoItemPurchasedType) => {
		setIsModalOpen(true);

		let contentInner = cryptoList.find((item) => item.id === content.id);

		if (contentInner) {
			setModalContent(contentInner);
		}
	};

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const profit = (a: number, b: number) => {
		return 100 * Math.abs((a - b) / ((a + b) / 2));
	};

	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		color: '#fff',
		backgroundColor: '#23292F',
		padding: '50px 30px',
	};

	return (
		<Layout.Content style={contentStyle}>
			<h1 style={{ textAlign: 'left', marginTop: 0 }}>My Assets</h1>

			<Flex style={{ gap: 30 }}>
				<div style={{ flexGrow: 1 }}>
					{cryptoListPurchased?.map((item, i) => {
						const cryptoListItem = cryptoList.find((crypto) => crypto.id === item.id);
						const cryptoGrow = cryptoListItem && cryptoListItem.price > item.price;

						return (
							<Card
								key={i}
								size="small"
								title={item.name}
								extra={<a onClick={() => showModal(item)}>More</a>}
								style={{ width: '100%', textAlign: 'left', marginBottom: 20 }}>
								<Flex
									style={{ marginBottom: 4 }}
									className="balance-cash"
									justify={'space-between'}>
									<div>Balance</div>

									{cryptoListItem &&
										(cryptoGrow ? (
											<div style={{ color: 'green' }}>
												${(item.amount * cryptoListItem.price).toFixed(2)}{' '}
												↗️
											</div>
										) : (
											<div style={{ color: 'red' }}>
												${(item.amount * cryptoListItem.price).toFixed(2)}{' '}
												↘️
											</div>
										))}
								</Flex>

								<Flex className="profit" justify={'space-between'}>
									<div>Profit</div>
									{cryptoListItem && (
										<div
											style={
												cryptoGrow ? { color: 'green' } : { color: 'red' }
											}>
											{profit(item.price, cryptoListItem.price).toFixed(2)} %
											<Tag
												style={{
													color: 'inherit',
													borderColor: 'inherit',
													marginLeft: 10,
												}}>
												$
												{(
													cryptoListItem.price * item.amount -
													item.price * item.amount
												).toFixed(2)}
											</Tag>
										</div>
									)}
								</Flex>
								<Flex className="amount" justify={'space-between'}>
									<div>Amount</div>
									<div>{item.amount}</div>
								</Flex>
							</Card>
						);
					})}
				</div>
				<div style={{ flexGrow: 1 }}>
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
				</div>
			</Flex>

			<AppModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				title={modalContent?.name}>
				{modalContent && (
					<>
						<p>
							<strong>Price: </strong>
							{modalContent.price}
						</p>
						<p>
							<strong>Price BTC: </strong>
							{modalContent.priceBtc}
						</p>
						<p>
							<strong>Market Cap: </strong>
							{modalContent.marketCap}
						</p>
						<br />
						<p>
							<strong>Price change</strong>
						</p>
						<Flex gap={20}>
							<div>
								<strong>1 hour: </strong>
								<Tag
									style={
										modalContent.priceChange1h > 0
											? { color: 'green', borderColor: 'green' }
											: { color: 'red', borderColor: 'red' }
									}>
									{modalContent?.priceChange1h}%
								</Tag>
							</div>
							<div>
								<strong>1 day: </strong>
								<Tag
									style={
										modalContent.priceChange1d > 0
											? { color: 'green', borderColor: 'green' }
											: { color: 'red', borderColor: 'red' }
									}>
									{modalContent.priceChange1d}%
								</Tag>
							</div>
							<div>
								<strong>1 week: </strong>
								<Tag
									style={
										modalContent.priceChange1w > 0
											? { color: 'green', borderColor: 'green' }
											: { color: 'red', borderColor: 'red' }
									}>
									{modalContent.priceChange1w}%
								</Tag>
							</div>
						</Flex>
					</>
				)}
			</AppModal>
		</Layout.Content>
	);
}
