import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return;
	<div>
		<Header />
		<main>{children}</main>
		<Footer />
	</div>;
};

export default Layout;
