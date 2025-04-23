import styles from './Layout.module.scss';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
