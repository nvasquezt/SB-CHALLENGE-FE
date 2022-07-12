import Head from 'next/head'
import styles from '../../styles/Location.module.css'
import Map from './Map'

const Location = () => {
  return (
  <>
    <Head>
      <title>Location</title>
      <meta name="description" content="Page of map location" />
    </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Location
        </h1>
        <article className="mapLogs">  
          <Map />
        </article>
      </main>
    </div>
  </>
  )
}

export default Location