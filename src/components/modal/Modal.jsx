import styles from './modal.module.scss';

const modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			{' '}
			{/*onClose describes the function that will be called when the overlay is clicked*/}{' '}
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				{' '}
				{/*e.stopPropagation() prevents the click event from bubbling up to the overlay*/}
				<button className={styles.closeBtn} onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default modal;
