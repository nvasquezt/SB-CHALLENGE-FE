import React, { useEffect, useState } from 'react'
import { getAllLocations } from '../../../services/locationServices'
import styles from './LocationTable.module.css'

const LocationTable = () => {
    const [locations, setLocations] = useState()
    const enableAllLocations = async() => {
        const payload = await getAllLocations();
        setLocations(payload);
    }

    useEffect(() => {
        enableAllLocations();
    } , [])

    if (locations !== undefined && locations.length<1) {
        return <div>Please add a new Location</div>
    } else {
        return (
            <div className={styles.datagrid}>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                    </thead>
                    {locations && locations.map(location => (
                        <tbody key={location.id}>
                        <tr>
                            <td>{location.id}</td>
                            <td>{location.country}</td>
                            <td>{location.city}</td>
                            <td>{location.address}</td>
                            <td>{location.lat}</td>
                            <td>{location.lng}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
                </div>
        )
    }
}

export default LocationTable