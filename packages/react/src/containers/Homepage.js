import React, { Component } from 'react';
import { HomepageView } from '../views';
import { Api } from '../utils';

const DEFAULT_ORGANISATION = 'nodejs';

class HomepageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organisation: DEFAULT_ORGANISATION,
      request: '',
      repositories: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      organisation: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.fetchData();
  }

  async fetchData() {
    const {
      organisation,
    } = this.state;

    this.setState({
      request: 'loading',
    });

    let repositories;
    try {
      repositories = await Api.get(organisation);
    } catch (err) {
      return this.setState({
        request: 'error',
      });
    }

    this.setState({
      repositories,
      request: 'loaded',
    });
  }

  render() {
    const {
      organisation,
      repositories,
      request,
    } = this.state;

    return (
      <HomepageView
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        organisation={organisation}
        repositories={repositories}
        request={request}
      />
    );
  }
}

export { HomepageContainer };
