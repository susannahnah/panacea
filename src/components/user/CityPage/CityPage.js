import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// testing map
import axios from 'axios';
import MapPage from '../MapPage/MapPage';

class CityPage extends Component {

  state = {
    city: {}
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

  render() {
    return (
      <>
        <Link to="/map" render={(props) => <MapPage {...props} />}>
          Sending props over to map page
        </Link>

        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </>
    )
  }
}

export default (CityPage);