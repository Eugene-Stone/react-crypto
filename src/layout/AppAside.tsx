import { useState } from 'react';
import { Layout, Button, List, Avatar, Tag, Flex } from 'antd';
import AppModal from '../components/AppModal';

import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppAside({ cryptoList, cryptoListPurchased }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<CryptoItemType | null>(null);

	const showModal = (content: CryptoItemType) => {
		setIsModalOpen(true);
		setModalContent(content);
	};

	const siderStyle: React.CSSProperties = {
		padding: '40px 30px 30px',
		color: '#fff',
		backgroundColor: '#343D46',
		height: '100vh',
		overflowY: 'auto',
	};

	const siderListItemStyle: React.CSSProperties = {
		borderRadius: 10,
		marginBottom: 20,
		padding: '5px 10px',
		textAlign: 'left',
		backgroundColor: '#fff',
	};

	return (
		<Layout.Sider width={350} style={siderStyle}>
			<div style={{ paddingBottom: 10 }}>
				<Button style={{ marginBottom: 30, width: '100%', minHeight: 50 }} type="primary">
					Add New Asset
				</Button>

				<List
					itemLayout="horizontal"
					dataSource={cryptoList}
					renderItem={(item, index) => (
						<List.Item style={siderListItemStyle}>
							<List.Item.Meta
								style={{ alignItems: 'center' }}
								avatar={<Avatar src={item.icon} />}
								title={<a onClick={() => showModal(item)}>{item.name}</a>}
								// description="Price: $0.59823"
							/>
						</List.Item>
					)}
				/>
			</div>

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
		</Layout.Sider>
	);
}
