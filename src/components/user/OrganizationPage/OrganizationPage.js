import React, {Component} from 'react';

class OrganizationPage extends Component {

  state = {
    org: []
  }

  // componentDidMount() {
  //   axios.get(`/api/search/organization?organization_name=%${this.props.match.params.orgName}%`)
  //     .then(({ data }) => {
  //       this.setState({
  //         org: { ...data[0] },
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('Error with search org:', error);
  //     })
  // }
  render() {
    return (
        <></>
  )}
}

export default (OrganizationPage);