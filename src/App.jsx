import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import Layout from './components/container/Layout';
import BookList from './components/booklist/BookList';
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

	const handleSearch = async (query) => {
		try {
			setLoading(true); // Set loading to true when starting a search
			const results = await fetchBooks(query);
			setBooks(results);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching books:', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		handleSearch('non-fiction');
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
		); //loading state
	}

	return (
		<Layout>
			<SearchBar onSearch={handleSearch} />
			<BookList books={books} />
		</Layout>
	);
}
export default App;
