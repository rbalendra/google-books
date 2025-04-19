import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(query);
		return;
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				{' '}
				<input
					className={styles.input}
					type='text'
					placeholder='search for book'
					value={query}
					onChange={(e) => setQuery(e.value.target)}
				/>
				<button className={styles.button} type='submit'>
					{' '}
					{<GoSearch />}
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
