import { Flex, Layout } from 'antd';
import AppMyCryptoList from '../components/AppMyCryptoList';
import AppChart from '../components/AppChart';

export default function AppContent() {
	const contentStyle: React.CSSProperties = {
		minHeight: 120,
		color: '#fff',
		backgroundColor: '#23292F',
		padding: '50px 30px',
	};

	return (
		<Layout.Content className="app-content" style={contentStyle}>
			<Flex className="app-content-row" style={{ gap: 30 }}>
				<div className="app-content-panel" style={{ width: 'calc(35% - 15px)' }}>
					<AppMyCryptoList />
				</div>

				<div
					className="app-content-panel app-chart-panel"
					style={{ width: 'calc(65% - 15px)' }}>
					<AppChart />
				</div>
			</Flex>
		</Layout.Content>
	);
}
