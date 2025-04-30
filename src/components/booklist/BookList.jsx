import styles from './BookList.module.scss';
import BookCard from '../bookcard/BookCard';

/* this component is used to display a list of books in a grid format. It takes an array of books as a prop and maps over them to create a BookCard for each book. If there are no books, it displays a message indicating that no results were found. */

const BookList = ({ books }) => {
	return (
		<div className={styles.grid}>
			{books.map((book) => (
				<BookCard key={book.id} book={book} /> //passing the books to the BookCard component
			))}
		</div>
	);
};

export default BookList;
