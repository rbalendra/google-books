import styles from './Layout.module.scss';
import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.content}>{children}</main>
		</div>
	);
};

export default Layout;
