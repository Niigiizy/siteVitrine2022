import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LegacyRef, useEffect, useRef } from 'react'
import { Canvas, Vector3 } from '@react-three/fiber'
import useMeasure from 'react-use-measure'
import styles from '../../styles/Realisation.module.css'
import { SceneCanvas } from './scene'
import { Provider } from 'react-redux'
import {connect} from 'react-redux';
import {NextPageContext} from 'next';
import { AppState } from '../../store/store'

const Realisation: NextPage<AppState> = (props: any) => {

  const [ref, bounds] = useMeasure()

  const div = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const div_current = div.current
    div_current?.addEventListener("scroll", () => console.log("ess"))
    console.log(props);
  }, [])

  const pos = useRef<Vector3>([1,0,1])


  return (
    <div className={styles.container} onScroll={(e) => console.log("lvrai")}>
      <Head>
        <title>Parsekonlepeu - Realisation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3c1742" />
      </Head>

      <main className={styles.main} onScroll={(e) => console.log("lvrai")}>

        <div className={styles.containerScroll} onScroll={(e) => console.log("lvrai")}>
          <div ref={ref} className={styles.containerRealisation}>
            <SceneCanvas pos={pos} {...props}/>
          </div>
        </div>

      </main>
    </div>
  )
}

export default connect((state: AppState) => state)(Realisation)