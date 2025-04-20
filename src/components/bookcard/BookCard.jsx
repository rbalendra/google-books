import styles from './BookCard.module.scss';

const BookCard = ({ book }) => {
	//get all the book info
	const { volumeInfo, searchInfo } = book; //destructure the book object to get volumeInfo and searchInfo
	const title = volumeInfo.title;
	const authors = volumeInfo.authors?.join(', ') || 'Unknown Author'; //if authors is undefined, set to 'Unknown Author'
	const thumbnail = volumeInfo.imageLinks?.thumbnail || 'No Image Available'; //optional chaining to avoid errors if imageLinks is undefined
	const description =
		volumeInfo.description?.slice(0, 400) + '...' || 'No Description Available'; //if description is undefined, set to 'No Description Available'
	const categories =
		volumeInfo.categories?.join(', ') || 'No Categories Available'; //if categories is undefined, set to 'No Categories Available'

	return (
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
					onClick={() => console.log('Details clicked')}>
					Details
				</button>
			</div>
		</div>
	);
};

export default BookCard;
