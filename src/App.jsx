import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import Layout from './components/container/Layout';
import BookLoader from './components/bookLoader/BookLoader';
import GenreButton from './components/genrebuttons/GenreButton';
import { useState } from 'react';

/* this  is the main component of the app
   it will hold the state of the app and pass it down to the children components such as SearchBar
*/

function App() {
	const [searchQuery, setSearchQuery] = useState(null);
	const [activeGenre, setActiveGenre] = useState(null);

	const handleSearch = (query) => {
		setSearchQuery(query);
		setActiveGenre(null);
	};

	const handleGenreSelect = (genre) => {
		setActiveGenre(genre);
		setSearchQuery(null);
	};

	return (
		<Layout>
			<SearchBar onSearch={handleSearch} />{' '}
			<GenreButton
				onSelectGenre={handleGenreSelect}
				activeGenre={activeGenre}
			/>
			<BookLoader searchQuery={searchQuery} genre={activeGenre} />
		</Layout>
	);
}
export default App;
