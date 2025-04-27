import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import Layout from './components/container/Layout';
import BookList from './components/booklist/BookList';
import GenreButton from './components/genrebuttons/GenreButton';
import { fetchBooks } from './utils/booksAPI';
import { useState, useEffect } from 'react';
import { FourSquare } from 'react-loading-indicators'; //loading animation

/* this  is the main component of the app
   it will hold the state of the app and pass it down to the children components such as SearchBar
   it will also handle the api calls and pass the results down to the children components such as BookList
*/

function App() {
	const [books, setBooks] = useState([]); //hold the search results
	const [loading, setLoading] = useState(true); //created for loading states
	const [activeGenre, setActiveGenre] = useState('Non-Fiction'); //create for active genre state on the genre buttons

	const handleSearch = async (query) => {
		try {
			setLoading(true); // Set loading to true when starting a search
			//// Reset active genre when doing a regular search
			if (!query.includes('subject:')) {
				// Check if the query is not a genre search
				setActiveGenre(null);
			}
			const results = await fetchBooks(query);
			setBooks(results);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching books:', error);
			setLoading(false);
		}
	};

	const handleGenreSelect = (genre) => {
		setActiveGenre(genre);
		handleSearch(`subject:${genre}`);
	};

	useEffect(() => {
		handleSearch('computers'); // Fetch initial books on component mount
	}, []);

	if (loading) {
		return (
			<div className='loading'>
				<FourSquare
					color={['#3a4a3d', '#a7c957', '#bc4749', '#1d384a']}
					size='large'
					text='loading books...'
					textColor=''
				/>
			</div>
		);
	}

	return (
		<Layout>
			<SearchBar onSearch={handleSearch} />
			<GenreButton
				onSelectGenre={handleGenreSelect}
				activeGenre={activeGenre}
			/>
			<BookList books={books} />
		</Layout>
	);
}
export default App;
