import { Layout, Button, List, Avatar } from 'antd';
import type { CryptoItemType, CryptoItemPurchasedType } from '../types';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppAside({ cryptoList, cryptoListPurchased }: Props) {
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

	const data = [
		{
			title: 'Ant Design Title 1',
		},
		{
			title: 'Ant Design Title 2',
		},
		{
			title: 'Ant Design Title 3',
		},
		{
			title: 'Ant Design Title 4',
		},
	];

	return (
		<Layout.Sider width={350} style={siderStyle}>
			<Button type="primary">Add Asset</Button>

			<List
				itemLayout="horizontal"
				dataSource={cryptoList}
				renderItem={(item, index) => (
					<List.Item style={siderListItemStyle}>
						<List.Item.Meta
							style={{ alignItems: 'center' }}
							avatar={<Avatar src={item.icon} />}
							title={<a href="https://ant.design">{item.name}</a>}
							// description="Price: $0.59823"
						/>
					</List.Item>
				)}
			/>
		</Layout.Sider>
	);
}
