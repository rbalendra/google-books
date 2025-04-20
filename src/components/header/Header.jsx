import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>📚</div>
			<div className={styles.brand}>
				<h1 className={styles.title}>Google Books</h1>
				<div className={styles.subtitle}>Search for your favorite books</div>
			</div>
		</header>
	);
};

export default Header;
