import { Button, DatePicker, Form, InputNumber } from 'antd';

import type { CryptoItemType, FormType } from '../types';

type Props = {
	selectedCoin: CryptoItemType | null;
	setSelectedCoin: React.Dispatch<React.SetStateAction<CryptoItemType | null>>;
};

export default function AppForm({ selectedCoin, setSelectedCoin }: Props) {
	const [form] = Form.useForm();
	const amount = Form.useWatch('amount', form);
	const price = Form.useWatch('price', form);
	const totalPrice = (amount || 0) * (price || 0);

	const handleSubmitForm = (values: FormType) => {
		console.log('Form Data:', values);
		setTimeout(() => {
			setSelectedCoin(null);
		}, 300);
	};

	return (
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
	);
}
