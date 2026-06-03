import { Spin, Layout } from 'antd';
import useCryptoContext from './context/useCryptoContext.ts';
import AppAside from './layout/AppAside';
import AppContent from './layout/AppContent';
import AppDrawer from './components/AppDrawer';

function App() {
	const { loading } = useCryptoContext();

	const layoutStyle = {
		overflow: 'hidden',
		minHeight: '100vh',
	};

	return (
		<>
			{loading && <Spin style={{ background: '#343D46' }} fullscreen size="large" />}

			<Layout style={layoutStyle}>
				<AppAside />

				<AppContent />

				<AppDrawer />
			</Layout>
		</>
	);
}

export default App;
