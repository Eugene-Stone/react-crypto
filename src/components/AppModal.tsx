import { Modal } from 'antd';
import type { CryptoItemType } from '../types';

type Props = {
	title?: string;
	modalContent: CryptoItemType | null;
	children: React.ReactNode;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppModal({
	title,
	modalContent,
	children,
	isModalOpen,
	setIsModalOpen,
}: Props) {
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
