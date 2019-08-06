import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CityPage extends Component {

  state = {
    city: {},
    orgTypes: ['Hospital', 'Clinic', 'Urgent Care', 'Laboratory', 'Home Visits', 'Pharmacy'],
  }

  render() {
    return (
      <>
        {this.state.orgTypes.map(
          (type, i) => (
            <button
              key={i}
            >

              <Link to={{
                pathname: `/map/${this.props.match.params.cityName}`,
                city_id: this.state.city.id,
                orgType: type,
                coordinates: {
                  lat: Number(this.state.city.lat),
                  lng: Number(this.state.city.long)
                },
              }}>
                {type}
              </Link>

            </button>
          ))}

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
    axios.get(`/api/search/city?city_name=%${this.props.match.params.cityName}%`)
      .then(({ data }) => {
        this.setState({
          city: { ...data[0] },
        })
      })
      .catch((error) => {
        console.log('Error with search city:', error);
      })
  }

}

export default (CityPage);