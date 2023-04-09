import Link from 'next/link';
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <div className="logo">
                Next Js
            </div>
            <ul>
                <li> <Link href='/'>Home</Link> </li>
                <li> <Link href='/deals'>Deals</Link> </li>
                <li> <Link href='/contact'>Contact</Link> </li>
                <li> <Link href='/about'>About</Link> </li>
            </ul>
            <style jsx>
                {`
                    .logo{
                        font-size: 30px;
                        color: #fff;
                        margin-right: auto;
                    }
                `}
            </style>
        </nav>
    );
}

export default Nav;
