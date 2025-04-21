import styles from './modal.module.scss';

const modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			{' '}
			//closes the modal
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeBtn} onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default modal;
