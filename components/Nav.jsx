import Link from 'next/link';
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <ul>
                <li> <Link href='/'>Home</Link> </li>
                <li> <Link href='/deals'>Deals</Link> </li>
                <li> <Link href='/contact'>Contact</Link> </li>
                <li> <Link href='/about'>About</Link> </li>
            </ul>
        </nav>
    );
}

export default Nav;
