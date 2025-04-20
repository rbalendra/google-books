import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import Layout from './components/container/Layout';
import BookList from './components/booklist/BookList';
import { fetchBooks } from './utils/booksAPI';
import { useState, useEffect } from 'react';

function App() {
	const [books, setBooks] = useState([]); //hold the search results

	const handleSearch = async (query) => {
		//trigger the api call (possibly can use useEffect here)
		const results = await fetchBooks(query);
		setBooks(results);
	};

	useEffect(() => {
		handleSearch('sci-fi');
	}, []);

	return (
		<Layout>
			<SearchBar onSearch={handleSearch} />
			<BookList books={books} />
		</Layout>
	);
}
export default App;
