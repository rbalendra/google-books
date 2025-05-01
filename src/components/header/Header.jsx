import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
	const base = import.meta.env.BASE_URL || '/';
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				{' '}
				<a href={base} style={{ color: 'inherit', textDecoration: 'none' }}>
					<img src={logo} alt={'Bookmark logo'} className={styles.brandLogo} />
				</a>
			</div>
		</header>
	);
};

export default Header;
