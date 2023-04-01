import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>

      <Navbar />

      <h1>Home Page</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic rerum similique, dolorem voluptas error voluptatibus, possimus omnis asperiores, consectetur impedit ab nobis quas! Aliquam.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic rerum similique, dolorem voluptas error voluptatibus, possimus omnis asperiores, consectetur impedit ab nobis quas! Aliquam.</p>

      <Link href='/ninjas'>See Ninja Listing</Link>

      <Footer />
      
   </div>
  )
}
