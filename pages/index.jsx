import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>

      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, consectetur nemo. Ipsam excepturi officiis ratione repellendus pariatur, officia maxime voluptatibus, perspiciatis temporibus possimus sequi expedita, deserunt labore numquam ex explicabo?</p>

      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa veritatis esse qui harum adipisci ratione, quos non laboriosam ipsam fugit, animi, necessitatibus eligendi molestias aspernatur.</p>

      <Link href='/ninjas' className={styles.btn}>See Ninjas Listing</Link>
   </>
  )
}
