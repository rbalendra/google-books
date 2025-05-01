import { useState } from 'react';
import styles from './BookCard.module.scss';
import Modal from '../modal/Modal';
import { IoIosImages } from 'react-icons/io';
import { PiDotsThreeCircleDuotone } from 'react-icons/pi';

const BookCard = ({ book }) => {
	const [isModalOpen, setIsModalOpen] = useState(false); //state to handle modal open and close
	const [imageError, setImageError] = useState(false); //state to handle image error

	// console.log(book); //log the book object to the console to see its structure

	//get all the book info
	const { volumeInfo } = book; //destructure the book object to get volumeInfo
	const { pageCount, publisher, publishedDate, title, subtitle } = volumeInfo; //destructure the volumeInfo object to get pageCount, publisher, publishedDate, title and subtitle
	const authors = volumeInfo.authors?.join(', ') || 'Unknown Author'; //if authors is undefined, set to 'Unknown Author'
	const thumbnail = volumeInfo.imageLinks?.thumbnail; //get the thumbnail image link from the volumeInfo object

	/*-------/ reducing description amount to show without chopping words halfway /---------*/
	const rawDesc = volumeInfo.description || 'No description available';
	const maxLenChars = 200;
	let description;

	if (rawDesc.length > maxLenChars) {
		//if the description is longer than maxLenChars
		const slicedDesc = rawDesc.slice(0, maxLenChars); //slice the description to maxLenChars at 200characters
		const lastSpaceIndex = slicedDesc.lastIndexOf(' '); // this method will search backwards through slice for exact substring match of ' '
		// console.log(lastSpaceIndex);
		description = slicedDesc.slice(0, lastSpaceIndex) + ` ...`; //slice the description to the last space index and add '...' at the end
	} else {
		description = rawDesc;
	}
	/*-------------------------------------------------------------------------------------*/

	const descriptionDetailed =
		volumeInfo.description || 'No Description Available'; //for the modal
	const categories =
		volumeInfo.categories?.join(', ') || 'No Categories Available'; //if categories is undefined, set to 'No Categories Available'

	const handleImageError = () => {
		setImageError(true); //set imageError to true if there is an error loading the image
	};

	return (
		<div>
			<div className={styles.card}>
				{thumbnail && !imageError ? (
					<div className={styles.thumbnailContainer}>
						<img
							src={thumbnail}
							alt={`${title} cover`}
							className={styles.thumbnail}
							onError={handleImageError} //call handleImageError if there is an error or a corrupt link
						/>
					</div>
				) : (
					<div className={styles.placeholder}>
						<div className={styles.icon}>
							<IoIosImages />
						</div>
						<div> No cover available</div>
					</div>
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
			{/* /* Adds a modal to show more details about the book when the button is
			clicked */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				{' '}
				{/* isOpen is a prop that controls the modal open and close */}
				{/* onClose is a prop that closes the modal when the close button is clicked */}
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
