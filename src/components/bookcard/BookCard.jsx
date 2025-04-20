import { useState } from 'react';
import styles from './BookCard.module.scss';
import Modal from '../modal/Modal';

const BookCard = ({ book }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	//get all the book info
	const { volumeInfo, searchInfo } = book; //destructure the book object to get volumeInfo and searchInfo
	const title = volumeInfo.title;
	const authors = volumeInfo.authors?.join(', ') || 'Unknown Author'; //if authors is undefined, set to 'Unknown Author'
	const thumbnail = volumeInfo.imageLinks?.thumbnail || 'No Image Available'; //optional chaining to avoid errors if imageLinks is undefined
	const description =
		volumeInfo.description?.slice(0, 200) + '...' || 'No Description Available'; //if description is undefined, set to 'No Description Available'
	const descriptionDetailed =
		volumeInfo.description || 'No Description Available';
	const categories =
		volumeInfo.categories?.join(', ') || 'No Categories Available'; //if categories is undefined, set to 'No Categories Available'
	const { pageCount, publisher, publishedDate, Description } = volumeInfo;

	return (
		<div>
			<div className={styles.card}>
				{thumbnail ? (
					<div className={styles.thumbnailContainer}>
						<img
							src={thumbnail}
							alt={`${title} cover`}
							className={styles.thumbnail}
						/>
					</div>
				) : (
					<div className={styles.placeholder}>No image</div>
				)}
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.authors}>{authors}</p>
					<p className={styles.description}>{description}</p>
					<p className={styles.categories}>{categories}</p>
				</div>

				<div className={styles.footer}>
					<button
						className={styles.detailsButton}
						onClick={() => setIsModalOpen(true)}>
						Details
					</button>
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h2>{title}</h2>
				<p style={{ display: 'flex', justifyContent: 'center' }}>
					<img
						src={thumbnail}
						alt={`${title} cover`}
						className={styles.thumbnail}
					/>
				</p>
				<p>
					<strong>Author:</strong> {authors}
				</p>
				<p>
					<strong>Description:</strong> {descriptionDetailed}
				</p>
				<p>
					<strong>Publisher:</strong> {publisher}
				</p>
			</Modal>
		</div>
	);
};

export default BookCard;
