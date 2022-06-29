import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    console.log(router.asPath);
  }, [router])

  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
        <nav className='navbar'>
            <div 
              className='arrondi-navbar' 
              style={{backgroundColor: router.asPath === "/" ? "white" : "#e0e0e0"}}
            >
              <div className='arrondi-navbar-2'/>
            </div>
            <Link href="/">
              <a className="lien">
                <div 
                  className='button-nav button-nav-gauche'
                  style={{
                    backgroundColor: router.asPath === "/" ? "white" : undefined,
                    height: router.asPath === "/" ? "35px" : "25px",
                    borderTopRightRadius: router.asPath === "/" ? "10px" : "0px"
                  }}
                >
                  Home
                  {
                    router.asPath === "/" ?
                    <>
                      <div className='arrondi-navbar-droite'/>
                      <div className='arrondi-navbar-droite-2'/>
                    </>
                    :
                    null
                  }
                </div>
              </a>
            </Link>
            <Link href="/realisation">
              <a className="lien">
                <div 
                  className='button-nav'
                  style={{
                    backgroundColor: router.asPath === "/realisation" ? "white" : undefined,
                    height: router.asPath === "/realisation" ? "35px" : "25px",
                    borderTopRightRadius: router.asPath === "/realisation" ? "10px" : "0px",
                    borderTopLeftRadius: router.asPath === "/realisation" ? "10px" : "0px"
                  }}
                >
                  Realisation
                  {
                    router.asPath === "/realisation" ?
                    <>
                      <div className='arrondi-navbar-gauche'/>
                      <div className='arrondi-navbar-gauche-2'/>
                      <div className='arrondi-navbar-droite'/>
                      <div className='arrondi-navbar-droite-2'/>
                    </>
                    :
                    null
                  }
                </div>
              </a>
            </Link>
            <Link href="/competence">
              <a className="lien">
                <div 
                  className='button-nav'
                  style={{
                    backgroundColor: router.asPath === "/competence" ? "white" : undefined,
                    height: router.asPath === "/competence" ? "35px" : "25px",
                    borderTopRightRadius: router.asPath === "/competence" ? "10px" : "0px",
                    borderTopLeftRadius: router.asPath === "/competence" ? "10px" : "0px"
                  }}
                >
                  Competence
                  {
                    router.asPath === "/competence" ?
                    <>
                      <div className='arrondi-navbar-gauche'/>
                      <div className='arrondi-navbar-gauche-2'/>
                      <div className='arrondi-navbar-droite'/>
                      <div className='arrondi-navbar-droite-2'/>
                    </>
                    :
                    null
                  }
                </div>
              </a>
            </Link>
            <Link href="/contact">
              <a className="lien">
                <div 
                  className='button-nav button-nav-droite'
                  style={{
                    backgroundColor: router.asPath === "/contact" ? "white" : undefined,
                    height: router.asPath === "/contact" ? "35px" : "25px",
                    borderTopLeftRadius: router.asPath === "/contact" ? "10px" : "0px"
                  }}
                >
                  Contact
                  {
                    router.asPath === "/contact" ?
                    <>
                      <div className='arrondi-navbar-gauche'/>
                      <div className='arrondi-navbar-gauche-2'/>
                    </>
                    :
                    null
                  }
                </div>
              </a>
            </Link>
        </nav>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
