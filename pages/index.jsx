import { server } from "../config";

import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {

  return (
    <div className={styles.main}>
      <h1>Hello Next</h1>
   </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const data = await res.json();

  return {
    props: {
      articles: data
    }
  }

}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
//   const data = await res.json();

//   return {
//     props: {
//       articles: data
//     }
//   }

// }