import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../../styles/Realisation.module.css'

const Realisation: NextPage = () => {

  useEffect(() => {
    const listener_resize = (event: any): void => console.log(event.target.innerHeight)
    window.addEventListener('resize', listener_resize)
    return () => window.removeEventListener('resize', listener_resize)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Parsekonlepeu - Realisation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3c1742" />
      </Head>

      <main className={styles.main}>

        <div className='container'>
          <div className={styles.containerRealisation}>

          </div>
        </div>

      </main>
    </div>
  )
}

export default Realisation