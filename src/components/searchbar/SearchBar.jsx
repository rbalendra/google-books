import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

import styles from './SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState(''); // State to hold the search query

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					className={styles.input}
					type='text'
					placeholder='search for book'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className={styles.button} type='submit'>
					{<GoSearch />}
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
