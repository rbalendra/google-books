import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import Layout from './components/container/Layout';
import BookLoader from './components/bookLoader/BookLoader';
import GenreButton from './components/genrebuttons/GenreButton';
import { useState } from 'react';

function App() {
	const [searchQuery, setSearchQuery] = useState(null); // this will hold the search query from the search bar
	const [activeGenre, setActiveGenre] = useState(null); // this will hold the active genre from the genre buttons

	const handleSearch = (query) => {
		// this function will be called when the user submits the search bar
		setSearchQuery(query);
		setActiveGenre(null);
	};

	const handleGenreSelect = (genre) => {
		// this function will be called when a genre button is selected
		setActiveGenre(genre);
		setSearchQuery(null);
	};

	return (
		<Layout>
			<SearchBar onSearch={handleSearch} />
			<GenreButton
				onSelectGenre={handleGenreSelect}
				activeGenre={activeGenre}
			/>
			<BookLoader searchQuery={searchQuery} genre={activeGenre} />
		</Layout>
	);
}
export default App;
