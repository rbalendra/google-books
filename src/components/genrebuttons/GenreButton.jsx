import React from 'react';
import styles from './GenreButton.module.scss';

const GenreButton = ({ onSelectGenre, activeGenre }) => {
	const popularGenres = [
		'Fiction',
		'Non-Fiction',
		'Science Fiction',
		'History',
		'Self-help',
		'Romance',
		'Biography',
	];

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
