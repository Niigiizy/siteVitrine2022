import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Theme } from '../types/theme.type';
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app';

const theme: Theme = {
  "primary": "#283593",
  "back": "white",
  "back-surface": "#f5f5f5",
  "switch-color": "#283593",
  "grey-1": "#f5f5f5",
  "grey-2": "#e0e0e0",
  "grey-3": "#e0e0e0",
  "text-1": "#546e7a",
  "text-2": "#455a64",
  "text-3": "#37474f",
}

const theme_dark: Theme = {
  "primary": "#283593",
  "back": "#212121",
  "back-surface": "black",
  "switch-color": "#212121",
  "grey-1": "#bdbdbd",
  "grey-2": "#616161",
  "grey-3": "#212121",
  "text-1": "#bdbdbd",
  "text-2": "#e0e0e0",
  "text-3": "#eeeeee",
}

const apply_theme = (doc: HTMLElement, theme: any) => {
  for (const property in theme) {
    const variable_css = "--" + property;
    doc.style.setProperty(variable_css, theme[property]);
  }
}

const change_theme = (doc: HTMLElement, theme: 'dark' | 'ligth'): void => {
  switch (theme) {
    case "dark":
      console.log("dans dark them change");
      doc.style.setProperty('--url-img-sombre', 'url("../public/sombre.png")');
      break;
    case "ligth":
      console.log("dans light them change");
      doc.style.setProperty('--url-img-sombre', 'url("../public/sombre_black.png")');
      break;
  
    default:

      break;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [mode_sombre, set_mode_sombre] = useState<boolean>(false)

  useEffect(() => {

    let doc = document.documentElement;

    if (mode_sombre) {
      apply_theme(doc, theme_dark)
      change_theme(doc, 'dark')
    } else {
      apply_theme(doc, theme)
      change_theme(doc, 'ligth')
    }

  }, [mode_sombre])

  const change_mode_sombre = () => {
    set_mode_sombre(!mode_sombre)
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <nav className='navbar'>
          <div 
            className='arrondi-navbar' 
            style={{
              backgroundColor: mode_sombre ? 
              router.asPath === "/" ?  theme_dark['back-surface'] : theme_dark['grey-2'] 
              : router.asPath === "/" ?  theme['grey-2'] : theme['back-surface']
            }}
          >
            <div className='arrondi-navbar-2'/>
          </div>
          <Link href="/">
            <a className="lien">
              <div 
                className='button-nav button-nav-gauche'
                style={{
                  backgroundColor: router.asPath === "/" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                  height: router.asPath === "/" ? "35px" : "25px",
                  borderTopRightRadius: router.asPath === "/" ? "10px" : "0px"
                }}
              >
                <p 
                  className='titre-page'
                  style={{
                    backgroundColor: router.asPath === "/" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                    color: router.asPath === "/" ? mode_sombre ? theme_dark['text-3'] : theme['text-3'] : undefined
                  }}
                >
                  Home
                </p>
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
                  backgroundColor: router.asPath === "/realisation" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                  height: router.asPath === "/realisation" ? "35px" : "25px",
                  borderTopRightRadius: router.asPath === "/realisation" ? "10px" : "0px",
                  borderTopLeftRadius: router.asPath === "/realisation" ? "10px" : "0px"
                }}
              >
                <p 
                  className='titre-page'
                  style={{
                    backgroundColor: router.asPath === "/realisation" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                    color: router.asPath === "/realisation" ? mode_sombre ? theme_dark['text-3'] : theme['text-3'] : undefined
                  }}
                >
                  Realisation
                </p>
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
                  backgroundColor: router.asPath === "/competence" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                  height: router.asPath === "/competence" ? "35px" : "25px",
                  borderTopRightRadius: router.asPath === "/competence" ? "10px" : "0px",
                  borderTopLeftRadius: router.asPath === "/competence" ? "10px" : "0px"
                }}
              >
                <p 
                  className='titre-page'
                  style={{
                    backgroundColor: router.asPath === "/competence" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                    color: router.asPath === "/competence" ? mode_sombre ? theme_dark['text-3'] : theme['text-3'] : undefined
                  }}
                >
                  Competence
                </p>
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
                  backgroundColor: router.asPath === "/contact" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                  height: router.asPath === "/contact" ? "35px" : "25px",
                  borderTopLeftRadius: router.asPath === "/contact" ? "10px" : "0px"
                }}
              >
                <p 
                  className='titre-page'
                  style={{
                    backgroundColor: router.asPath === "/contact" ? mode_sombre ? theme_dark['back-surface'] : theme['back-surface'] : undefined,
                    color: router.asPath === "/contact" ? mode_sombre ? theme_dark['text-3'] : theme['text-3'] : undefined
                  }}
                >
                  Contact
                </p>
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
      <div className='mode-sombre'>
        <label className='switch'>
          <input 
            type={'checkbox'}
            // checked={mode_sombre}
            onChange={change_mode_sombre}
          />
          <div className='slider'>
            {
              mode_sombre ? 
              <div className='img-dark'/>
              :
              <div className='img-ligth'/>
            }
          </div>
        </label>
      </div>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
