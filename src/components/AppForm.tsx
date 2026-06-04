import { Button, DatePicker, Form, InputNumber } from 'antd';
import useCryptoContext from '../context/useCryptoContext';

import type { CryptoItemType, FormType } from '../types';

type Props = {
	selectedCoin: CryptoItemType | null;
	setSelectedCoin: React.Dispatch<React.SetStateAction<CryptoItemType | null>>;
};

export default function AppForm({ selectedCoin, setSelectedCoin }: Props) {
	const { sendFormData } = useCryptoContext();

	const [form] = Form.useForm();
	const amount = Form.useWatch('amount', form);
	const price = Form.useWatch('price', form);
	const totalPrice = (amount || 0) * (price || 0);

	const handleSubmitForm = async (values: FormType) => {
		if (!selectedCoin) return;
		await sendFormData(values, selectedCoin);

		// Reset the form fields back to empty or initialValues
		form.resetFields();
	};

	return (
		<Form form={form} onFinish={handleSubmitForm}>
			<h2 style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}>
				<img
					src={selectedCoin?.icon}
					alt={selectedCoin?.name}
					width={50}
					style={{ marginRight: 10 }}
				/>
				<span>{selectedCoin?.name}</span>
			</h2>
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
