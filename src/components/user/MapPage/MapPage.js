import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

function MapPage(props) {

  const [coordinates, setCoordinates] = useState()

  return (
    <>

      {
        props.location.coordinates

          ?

          <div style={{ height: '100vh', width: '100%' }}>

            <GoogleMapReact
              bootstrapURLKeys={{
                key: '',
                language: 'en'
              }}
              center={props.location.coordinates}
              defaultZoom={11}
            >

              <Marker
                lat={props.location.coordinates.lat}
                lng={props.location.coordinates.lng}
              />

            </GoogleMapReact>

            <pre>
              {JSON.stringify(props, null, 2)}
            </pre>

          </div>

          :

          <></>

      }

    </>
  )
}

export default (MapPage);