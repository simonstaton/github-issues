import React, { Component } from 'react';
import { HomepageView } from '../views';
import { Api } from '../utils';

const DEFAULT_ORGANISATION = 'nodejs';

class HomepageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organisation: DEFAULT_ORGANISATION,
      repositories: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      organisation: e.target.value,
    });
  }

  fetchData() {
    const {
      organisation,
    } = this.state;

    Api.get(organisation).then((repositories) => {
      this.setState({
        repositories
      })
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.fetchData();
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    const {
      organisation,
      repositories,
    } = this.state;

    return (
      <HomepageView
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        organisation={organisation}
        repositories={repositories}
      />
    );
  }
}

export { HomepageContainer };
