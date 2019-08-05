import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// testing map
import axios from 'axios';
import MapPage from '../MapPage/MapPage';

class CityPage extends Component {

  state = {
    city: {}
  }

  render() {
    return (
      <>
        <Link to={{
          pathname: '/map',
          coordinates: {
            lat: Number(this.state.city.lat),
            lng: Number(this.state.city.long)
          },
        }}>
          Sending props to Map Page
        </Link>

        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    )
  }

  componentDidMount() {
    axios.get('/api/cities')
      .then(({ data }) => {
        this.setState({
          city: { ...data[0] }
        })
      })
      .catch((error) => {
        console.log('Error with cities call: ', error);
      });
  }

}

export default (CityPage);