import styles from './BookList.module.scss';
import BookCard from '../bookcard/BookCard';

const BookList = ({ books }) => {
	if (!books.length)
		return (
			<p
				style={{
					color: 'white',
					backgroundColor: 'crimson',
					padding: '1rem',
					borderRadius: '.3rem',
				}}>
				No results found. Please try again.
			</p>
		);

	return (
		<div className={styles.grid}>
			{books.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	);
};

export default BookList;
