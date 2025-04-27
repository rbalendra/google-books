import { useState } from 'react';
import styles from './BookCard.module.scss';
import Modal from '../modal/Modal';

const BookCard = ({ book }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imageError, setImageError] = useState(false); //state to handle image error

	console.log(book); //log the book object to the console to see its structure
	//get all the book info
	const { volumeInfo } = book; //destructure the book object to get volumeInfo and searchInfo
	const { pageCount, publisher, publishedDate, title, subtitle } = volumeInfo;
	const authors = volumeInfo.authors?.join(', ') || 'Unknown Author'; //if authors is undefined, set to 'Unknown Author'
	const thumbnail = volumeInfo.imageLinks?.thumbnail;
	const description =
		volumeInfo.description?.slice(0, 200) + '...' || 'No Description Available'; //if description is undefined, set to 'No Description Available'
	const descriptionDetailed =
		volumeInfo.description || 'No Description Available';
	const categories =
		volumeInfo.categories?.join(', ') || 'No Categories Available'; //if categories is undefined, set to 'No Categories Available'

	const handleImageError = () => {
		setImageError(true); //set imageError to true if there is an error loading the image
	};

	return (
		<div>
			<div className={styles.card}>
				{thumbnail ? (
					<div className={styles.thumbnailContainer}>
						<img
							src={thumbnail}
							alt={`${title} cover`}
							className={styles.thumbnail}
							onError={handleImageError} //call handleImageError if there is an error loading the image
						/>
					</div>
				) : (
					<div className={styles.placeholder}>No cover available</div>
				)}
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<h2 className={styles.subtitle}>{subtitle}</h2>
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
			{/* /* Add a modal to show more details about the book when the button is
			clicked */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h2>{title}</h2>
				<p style={{ display: 'flex', justifyContent: 'center' }}>
					{thumbnail && !imageError ? (
						<img
							src={thumbnail}
							alt={`${title} cover`}
							className={styles.thumbnail}
							onError={handleImageError}
						/>
					) : (
						<div>
							<p>No Cover Available</p>
							<p>{title}</p>
						</div>
					)}
				</p>
				<p>
					<strong>Subtitle:</strong> {subtitle}
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
				<p>
					<strong>Published date:</strong> {publishedDate}
				</p>
				<p>
					<strong>Pages:</strong> {pageCount}
				</p>
			</Modal>
		</div>
	);
};

export default BookCard;
