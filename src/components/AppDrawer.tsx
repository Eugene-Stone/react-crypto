import { Drawer, Select, Button, DatePicker, Form, Input, InputNumber } from 'antd';
import type { FormType } from '../types';
type Props = {
	openDrawer: boolean;
	setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppDrawer({ openDrawer, setOpenDrawer }: Props) {
	const [form] = Form.useForm();
	const amount = Form.useWatch('amount', form);
	const price = Form.useWatch('price', form);
	const totalPrice = (amount || 0) * (price || 0);

	const handleSubmitForm = (values: FormType) => {
		console.log('Form Data:', values);
	};

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};
	return (
		<Drawer
			className="drawer"
			title="Adding new asset"
			closable={{ 'aria-label': 'Close Button' }}
			onClose={() => setOpenDrawer((prev) => !prev)}
			open={openDrawer}
			placement="left">
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

			<Form form={form} onFinish={handleSubmitForm}>
				<Form.Item
					label="Amount"
					name="amount"
					rules={[{ required: true, message: 'Please input!' }]}>
					<InputNumber style={{ width: '100%' }} min="0" />
				</Form.Item>
				<Form.Item
					label="Price"
					name="price"
					rules={[{ required: false, message: 'Please input!' }]}>
					<InputNumber style={{ width: '100%' }} min="0" />
				</Form.Item>
				<Form.Item
					label="Date purchase"
					name="datePurchase"
					rules={[{ required: true, message: 'Please input!' }]}>
					<DatePicker style={{ width: '100%' }} />
				</Form.Item>
				<Form.Item label="Total price">
					<InputNumber value={totalPrice} readOnly style={{ width: '100%' }} />
				</Form.Item>
				<Form.Item label={null}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Drawer>
	);
}
