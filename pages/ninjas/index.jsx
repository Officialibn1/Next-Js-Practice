import Head from "next/head";
import Link from "next/link";

import styles from '../../styles/Ninjas.module.css';


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
};



const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <Head>
                <title>Ninjas | Ninja List</title>
                <meta name="keywords" content="ninjas" />
            </Head>

            <h1>All Ninjas</h1>

            {ninjas.map((ninja, idx) => (
                <Link key={idx} href={'/ninjas/' + ninja.id} className={styles.single}>
                    <h3>{ninja.name}</h3>
                </Link>
            ))}
            
           
        </div>
    );
}

export default Ninjas;
