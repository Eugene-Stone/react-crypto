// import { useState } from 'react';
import { Spin, Layout } from 'antd';
import useData from './hooks/useData';
import AppAside from './layout/AppAside';
import AppContent from './layout/AppContent';

function App() {
	const { cryptoList, cryptoListPurchased, loading, errorData } = useData();

	const layoutStyle = {
		overflow: 'hidden',
		minHeight: '100vh',
	};

	return (
		<>
			{loading && <Spin style={{ background: '#343D46' }} fullscreen size="large" />}

			<Layout style={layoutStyle}>
				<AppAside cryptoList={cryptoList} cryptoListPurchased={cryptoListPurchased} />

				<AppContent cryptoList={cryptoList} cryptoListPurchased={cryptoListPurchased} />
			</Layout>
		</>
	);
}

export default App;
