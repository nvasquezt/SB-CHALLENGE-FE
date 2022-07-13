import { useState } from 'react';
import Head from 'next/head';
import Header from '../../Components/Header';
import Map from '../../Components/Map';
import NewLocation from '../../Components/NewLocation';
import styles from '../../../styles/Location.module.css';

const center = [4.684335, -74.113644]

export default function Home() {
  const [openNewLocation, setOpenNewLocation] = useState(false);

  const handleOpenNewLocation = () => {
    setOpenNewLocation(!openNewLocation);
  }
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Spy Bee Challenge Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Locations
        </h1>

        <Map 
        className={styles.homeMap}
        center={center} zoom={13}
        scrollWheelZoom={false}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={center}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
        <div className={styles.datagrid}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Location</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <div className={styles.buttonsBox}>
      <button className={styles.button} onClick={handleOpenNewLocation}>
        Add new location</button>
      <button className={styles.button}>Delete location</button>
      </div>
      {openNewLocation && <NewLocation />}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
