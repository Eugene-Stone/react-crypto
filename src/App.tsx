import { Spin, Layout } from 'antd';
import useCryptoContext from './context/useCryptoContext.ts';
import AppAside from './layout/AppAside';
import AppContent from './layout/AppContent';
import AppDrawer from './components/AppDrawer';
import { useState } from 'react';

function App() {
	const { loading } = useCryptoContext();
	const [openDrawer, setOpenDrawer] = useState(false);

	const layoutStyle = {
		overflow: 'hidden',
		minHeight: '100vh',
	};

	return (
		<>
			{loading && <Spin style={{ background: '#343D46' }} fullscreen size="large" />}

			<Layout style={layoutStyle}>
				<AppAside setOpenDrawer={setOpenDrawer} />

				<AppContent />

				<AppDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
			</Layout>
		</>
	);
}

export default App;
