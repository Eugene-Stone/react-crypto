import { Layout, Button, List, Avatar } from 'antd';
import AppModal from '../components/AppModal';
import type { CryptoItemType, CryptoItemPurchasedType } from '../types';
import { useState } from 'react';

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
		textAlign: 'center',
		lineHeight: '120px',
		padding: '30px 30px 30px',
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
				<Button type="primary">Add Asset</Button>

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
				modalContent={modalContent}
				title={modalContent?.name}>
				123
			</AppModal>
		</Layout.Sider>
	);
}
