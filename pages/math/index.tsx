import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estadisticas y Matematicas</title>
        <meta name="description" content="Data Science, Matematica, Estadistica, Problabilidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <main className={styles.main}>
        <p className={styles.back}>
          <Link href="/">
            <a>
              &larr; Volver
            </a>
          </Link>
        </p>
        <h1 className={styles.title}>
          Estadisticas y <a className={styles.highlight} href="https://nextjs.org">Matematicas!</a>
        </h1>

        <p className={styles.description}>
          Sebastian Navarro{' '}
          <code className={styles.code}>Portfolio</code>
        </p>

        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Estadistica Descriptiva &rarr;</h2>
            {/* <p>Estadistica descriptiva e inferencial, Diseno Experimental, Probalidad, Algebra Lineal, Calculo simple y multivariable.</p> */}
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Estadistica Inferencial &rarr;</h2>
            <p></p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Diseno Experimental&rarr;</h2>
            <p></p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Probabilidad &rarr;</h2>
            <p>
              
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Anova, Chi-Square Test  &rarr;</h2>
            <p>
              
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Sampling, Data Distribution, T-Test  &rarr;</h2>
            <p>
              
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Algebra Lineal  &rarr;</h2>
            <p>
              
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Calculo Multivariado y Simple  &rarr;</h2>
            <p>
              
            </p>
          </a>
        </div>
      </main>

      
    </div>
  )
}

export default index
