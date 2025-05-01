import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
const Header = () => {
	const base = import.meta.env.BASE_URL || '/'; //this is added because of the vite build process. It will be used to set the base URL for the app. If you are using a different build process, you can remove this line and set the base URL to '/' directly.
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
