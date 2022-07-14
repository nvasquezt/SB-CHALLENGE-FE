import React, {useState} from 'react'
import styles from './NewLocation.module.css'
import { createLocation } from '../../../api/locationServices'

const NewLocation = () => {
  const [payload, setPayload] = useState({
    address: '',
    city: '',
    country: '',
    lat: '',
    lng: '',
  });
  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await createLocation(payload);
    window.location.reload();
  }
  return (
    <div className={styles.newLocation}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Address
          <input 
            className={styles.input}
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          City
          <input
            className={styles.input}
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Country
          <input
            className={styles.input}
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Latitude
          <input
            className={styles.input}
            type="text"
            name="lat"
            placeholder="Latitude"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Longitude
          <input
            className={styles.input}
            type="text"
            name="lng"
            placeholder="Longitude"
            onChange={handleChange}
          />
        </label>
        <button className={styles.button}
        type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewLocation