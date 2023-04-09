import styles from '../styles/Layout.module.css'
import Header from './Header';
import Nav from './Nav';


const Layout = ({children}) => {
    return (
        <>
            <Nav />

            <div className={styles.container}>
                <Header />
            </div>

                {children}

            <footer className={styles.footer}>
                <h1>Footer</h1>
            </footer>
        </>
    );
}

export default Layout;
