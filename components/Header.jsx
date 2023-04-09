import styles from '../styles/Header.module.css'

const color = 2;

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className="text" color={2} >Next Js is Cool. . .</h1>
            <p className="desc">
                I'm really starting to love Next Js Sooo much. . . 
            </p>

            {/* JSX inline styling with Next */}
            <style jsx>
                {`
                    .text{
                        font-size: 45px;
                        color: ${color == 2 ? 'rebeccapurple' : 'blue'};
                    }
                    
                    .desc{
                        font-size: 14px;
                        color: ${color == 2 ? 'rebeccapurple' : 'blue'};
                        margin: 20px 0;
                    }
                `}
            </style>
        </header>
    );
}

export default Header;
