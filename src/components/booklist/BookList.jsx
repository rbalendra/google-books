import styles from './BookList.module.scss';
import BookCard from '../BookCard/BookCard';

const BookList = ({ books }) => {
	if (!books.length) return <p>No results found</p>;

	return (
		<div className={styles.grid}>
			{books.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	);
};

export default BookList;
