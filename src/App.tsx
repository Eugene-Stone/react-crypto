// import { useState } from 'react';
import { Select } from 'antd';

function App() {
	// const [count, setCount] = useState(0);

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
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
	);
}

export default App;
