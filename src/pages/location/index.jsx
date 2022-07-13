import Head from 'next/head';
import Map from '../../Components/Map';
import styles from '../../../styles/Location.module.css';

const center = [4.684335, -74.113644]

export default function Home() {
  return (
    <div className={styles.container}>
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
      <button>Add new location</button>
      <button>Delete location</button>
      </div>
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
