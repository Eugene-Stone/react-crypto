import { Drawer, Select } from 'antd';
type Props = {
	openDrawer: boolean;
	setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppDrawer({ openDrawer, setOpenDrawer }: Props) {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<Drawer
			title="Basic Drawer"
			closable={{ 'aria-label': 'Close Button' }}
			onClose={() => setOpenDrawer((prev) => !prev)}
			open={openDrawer}>
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
		</Drawer>
	);
}
