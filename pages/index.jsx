import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>

      <h1 className={styles.title}>Home Page</h1>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic rerum similique, dolorem voluptas error voluptatibus, possimus omnis asperiores, consectetur impedit ab nobis quas! Aliquam.</p>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic rerum similique, dolorem voluptas error voluptatibus, possimus omnis asperiores, consectetur impedit ab nobis quas! Aliquam.</p>

      <Link href='/ninjas' className={styles.btn}>See Ninja Listing</Link>

   </div>
  )
}
