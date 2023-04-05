import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}


const Index = ({ ninjas }) => {
    return (
        <div>
            <h1>Ninja List</h1>

            {ninjas.map((ninja, index) => (
                <Link href={'/ninjas/' + ninja.id} key={index} className={styles.single}>
                   
                        <h3>{ninja.name}</h3>
           
                </Link>
            ))}
       
        </div>
    );
}

export default Index;
