import { Select } from 'antd';

export default function AppDrawer() {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<>
			{/* <Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
					{ value: 'lucy', label: 'Lucy' },
					{ value: 'Yiminghe', label: 'yiminghe' },
					{ value: 'disabled', label: 'Disabled', disabled: true },
				]}
			/> */}
		</>
	);
}
