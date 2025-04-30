import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../utils/booksAPI';
import styles from './BookLoader.module.scss';
import BookList from '../booklist/BookList';
import { FourSquare } from 'react-loading-indicators'; //loading animation

const BookLoader = ({ searchQuery, genre }) => {
	// searchQuery and genre are passed as props from the parent component app.jsx
	const [books, setBooks] = useState([]); //books state to hold the books fetched from the API
	const [fetchStatus, setFetchStatus] = useState('PENDING'); //fetchStatus state to hold the status of the fetch request
	const [error, setError] = useState(null); //error state to hold the error if any occurs during the fetch request
	const [currentQuery, setCurrentQuery] = useState(''); //currentQuery state to hold the current search query
	const [isInitialLoad, setIsInitialLoad] = useState(true); //isInitialLoad state to indidicate whether this is the first time the component is loading or not when the component mounts

	///NOTE - The useEffect hook is used to perform side effects in functional components. It takes two arguments: a function and an array of dependencies. The function is executed after the component renders, and the array of dependencies determines when the effect should be re-run. In this case, the effect is re-run whenever the searchQuery or genre changes or when the isInitialLoad changes.

	useEffect(() => {
		if (searchQuery === '') {
			//if the searchQuery is empty, set the books to empty array and fetchStatus to SUCCESS
			setBooks([]);
			setCurrentQuery('');
			setFetchStatus('SUCCESS');
			return; //exit the function
		}

		//NOTE - The isGenreSearch is used to determine if the search is a genre search or a normal search. If the genre is not null, then it is a genre search. The query variable is set to either the genre or the searchQuery. If both are empty, it defaults to 'computers' because I wanted to show the top 10 books or trending books but unfortunately google books API don't have a valid endpoint for that.

		const isGenreSearch = genre != null;
		const query = isGenreSearch
			? `subject:${genre}`
			: searchQuery || 'computers';
		console.log('Query being used:', query); // this will log the query or genre chosen by the user

		//NOTE - The currentQuery is set based on the searchQuery and genre. If it is not a genre search and the searchQuery is not empty and it is not the initial load, then set the currentQuery to the searchQuery. If it is the initial load, set the currentQuery to an empty string. If it is a genre search, set the currentQuery to an empty string.
		if (!isGenreSearch && searchQuery && !isInitialLoad) {
			setCurrentQuery(searchQuery);
		} else if (isInitialLoad) {
			setCurrentQuery('');
		} else if (isGenreSearch) {
			setCurrentQuery('');
		}
		setFetchStatus('LOADING');

		//NOTE - The fetchBooks function is called with the query and it returns a promise. If the promise is resolved, the books state setBooks --> results and the fetchStatus is set to SUCCESS. If the promise is rejected, the error state is set to the error and the fetchStatus is set to FAILED.
		fetchBooks(query)
			.then((results) => {
				setBooks(results);
				setFetchStatus('SUCCESS');
				if (isInitialLoad) {
					setIsInitialLoad(false);
				}
			})
			.catch((error) => {
				console.error('Error Fetching books:', error);
				setError(error);
				setFetchStatus('FAILED');
				if (isInitialLoad) {
					setIsInitialLoad(false);
				}
			});
	}, [searchQuery, genre, isInitialLoad]); //dependencies array - this will run the effect whenever the searchQuery or genre changes or when the isInitialLoad changes

	if (isInitialLoad && fetchStatus === 'LOADING') {
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

	// No books found message
	if (!books || books.length === 0) {
		// Don't show during initial load
		if (!isInitialLoad) {
			return (
				<div className={styles.error}>
					<p>No results found. Please try another title.</p>
				</div>
			);
		}
	}

	return (
		<>
			{currentQuery && (
				<div className={styles.searchInfo}>
					<h3>
						search result for:{'  '}
						<span className={styles.queryText}>{currentQuery}</span>
					</h3>
				</div>
			)}
			<BookList books={books} />
		</>
	);
};

export default BookLoader;
