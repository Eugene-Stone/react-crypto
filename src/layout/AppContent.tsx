import { Select, Flex, Layout } from 'antd';
import type { CryptoItemType, CryptoItemPurchasedType } from '../types';
import AppMyCryptoList from '../components/AppMyCryptoList';
import AppChart from '../components/AppChart';

type Props = {
	cryptoList: CryptoItemType[];
	cryptoListPurchased: CryptoItemPurchasedType[];
};

export default function AppContent({ cryptoList, cryptoListPurchased }: Props) {
	const contentStyle: React.CSSProperties = {
		minHeight: 120,
		color: '#fff',
		backgroundColor: '#23292F',
		padding: '50px 30px',
	};

	return (
		<Layout.Content style={contentStyle}>
			<Flex style={{ gap: 30 }}>
				<div style={{ width: 'calc(35% - 15px)' }}>
					<h1 style={{ textAlign: 'left', marginTop: 0 }}>My Assets</h1>

					<AppMyCryptoList
						cryptoList={cryptoList}
						cryptoListPurchased={cryptoListPurchased}
					/>
				</div>
				<div style={{ width: 'calc(65% - 15px)' }}>
					<AppChart cryptoList={cryptoList} cryptoListPurchased={cryptoListPurchased} />
				</div>
			</Flex>
		</Layout.Content>
	);
}
