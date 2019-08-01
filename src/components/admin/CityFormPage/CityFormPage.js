import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityFormPage extends Component {
  state = {
    newCity: {
      name: '',
      overview: '',
      health_risks: '',
      ambulance: '',
      fire: '',
      police: '',
      roadside_assistance: '',
      wellness_resources: '',
      local_health_remedies: '',
      healthcare_tourism: '',
      WHO_link: '',
      CDC_link: '',
    }
  }

  handleNewChange = (propertyName) => (event) => {
    console.log('somethings happening!');
    this.setState({
      newCity: {
        ...this.state.newCity,
        [propertyName]: event.target.value,
      }
    })
  }

  

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props; // this is the same way as writing const params = this.props.match.params.cityName;
    if (cityName === 'new') {
      console.log('new form');
    } else {
      console.log('filled form');
    }
  }

  render() {
    return (
      <>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    )
  }
}

export default connect()(CityFormPage);