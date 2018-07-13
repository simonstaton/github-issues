import React, { Component } from 'react';
import { OrganisationView } from '../views';
import { Api } from '../utils';

class OrganisationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organisation: '',
      repositories: [],
    };
  }

  async componentWillMount() {
    const {
      location,
      match,
    } = this.props;

    const repositories = (
      location.state && location.state.repositories
    ) || await Api.get(match.params.org);

    this.setState({
      organisation: match.params.org,
      repositories,
    });
  }

  render() {
    const {
      organisation,
      repositories,
    } = this.state;

    return (
      <OrganisationView
        organisation={organisation}
        repositories={repositories}
      />
    );
  }
}

export { OrganisationContainer };
