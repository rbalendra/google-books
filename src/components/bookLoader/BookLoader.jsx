import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../utils/booksAPI';
import styles from './BookLoader.module.scss';
import BookList from '../booklist/BookList';
import { FourSquare } from 'react-loading-indicators'; //loading animation

const BookLoader = ({ searchQuery, genre }) => {
	const [books, setBooks] = useState([]);
	const [fetchStatus, setFetchStatus] = useState('PENDING');
	const [error, setError] = useState(null);

	useEffect(() => {
		if (searchQuery === '') {
			setBooks([]);
			setFetchStatus('SUCCESS');
			return;
		}
		const query = genre ? `subject:${genre}` : searchQuery || 'computers';
		setFetchStatus('LOADING');

		fetchBooks(query)
			.then((results) => {
				setBooks(results);
				setFetchStatus('SUCCESS');
			})
			.catch((error) => {
				console.error('Error Fetching books:', error);
				setError(error);
				setFetchStatus('FAILED');
			});
	}, [searchQuery, genre]);

	if (fetchStatus === 'LOADING') {
		return (
			<div className={styles.loading}>
				<FourSquare
					color={['#3a4a3d', '#a7c957', '#bc4749', '#1d384a']}
					size='large'
					text='loading books...'
					textColor=''
				/>
			</div>
		);
	}

	if (fetchStatus === 'FAILED') {
		return (
			<div className={styles.error}>
				<p>Failed to load books: {error?.message || 'Unknown error'}</p>
			</div>
		);
	}

	return (
		<>
			<BookList books={books} />
		</>
	);
};

export default BookLoader;
