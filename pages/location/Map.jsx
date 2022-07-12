import React from 'react'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <div>
        <MapContainer
        center={center}
        zoom={13}
        style={{ height: '70vh', width: '90vw' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((position, index) => (
          <Marker position={position.location} key={index} icon={icon}>
            <Popup>
              <strong>⌚Date of Location</strong>
              <p>{position.date}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map