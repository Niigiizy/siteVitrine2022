import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Realisation.module.css'

const Realisation: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parsekonlepeu - Realisation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3c1742" />
      </Head>

      <main className={styles.main}>

        <div className='container'>

        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Realisation