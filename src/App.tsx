// import { useState } from 'react';
import { Select } from 'antd';
import useData from './hooks/useData';
import { Spin } from 'antd';

function App() {
	const { cryptoList, cryptoListPurchased, loading, errorData } = useData();

	console.log(cryptoList);
	console.log(cryptoListPurchased);

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<>
			{loading && <Spin style={{ background: '#343D46' }} fullscreen size="large" />}

			<section>
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
			</section>
		</>
	);
}

export default App;
