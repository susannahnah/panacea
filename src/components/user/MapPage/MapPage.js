import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapPage extends Component {

  static defaultProps = {
    center: {
      lat: 50.0647,
      lng: 19.9450
    },
    zoom: 13
  };

  render() {
    return (
      <>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: '',
              language: 'en'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >

            <AnyReactComponent
              lat={50.049683}
              lng={19.944544}
              text="My Marker"
            />

          </GoogleMapReact>
        </div>
      </>
    )
  }
}

export default (MapPage);