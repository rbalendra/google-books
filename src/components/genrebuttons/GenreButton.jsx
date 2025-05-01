import React from 'react';
import styles from './GenreButton.module.scss';

const GenreButton = ({ onSelectGenre, activeGenre }) => {
	const popularGenres = [
		'fiction',
		'programming',
		'science fiction',
		'history',
		'self-help',
		'romance',
		'biography',
		'thriller',
		'fantasy',
		'health',
		'travel',
		'cookbook',
		'medicine',
		'philosophy',
		'psychology',
	];

	//NOTE - The GenreButton component is a functional component that takes two props: onSelectGenre and activeGenre. The onSelectGenre prop is a function that is called when a genre button is clicked, and the activeGenre prop is used to determine which genre button should be highlighted as active.

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Popular Genres</h3>
			<div className={styles.buttonContainer}>
				{popularGenres.map((genre) => (
					<button
						key={genre}
						className={`${styles.genreButton} ${
							genre === activeGenre ? styles.active : ''
						}`}
						onClick={() => onSelectGenre(genre)}>
						{genre}
					</button>
				))}
			</div>
		</div>
	);
};

export default GenreButton;
