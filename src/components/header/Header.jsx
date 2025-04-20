import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>📚</div>
			<div className={styles.brand}>
				{' '}
				<a href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<img src={logo} alt={'Bookmark logo'} className={styles.brandLogo} />
				</a>
			</div>
		</header>
	);
};

export default Header;
