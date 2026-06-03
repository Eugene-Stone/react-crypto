import { Modal } from 'antd';

type Props = {
	title?: string;
	children: React.ReactNode;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppModal({ title, children, isModalOpen, setIsModalOpen }: Props) {
	return (
		<>
			<Modal
				closable={{ 'aria-label': 'Custom Close Button' }}
				open={isModalOpen}
				onCancel={() => setIsModalOpen((prev) => !prev)}
				footer={null}
				title={title}>
				{children}
			</Modal>
		</>
	);
}
