import React, { Component } from 'react';
import { RepoView } from '../views';
import { Api } from '../utils';

class RepoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      repo: [],
    };
  }

  async componentWillMount() {
    const {
      match,
    } = this.props;

    const repo = await Api.get(match.params.org, match.params.name);

    this.setState({
      name: match.params.name,
      repo,
    });
  }

  render() {
    const {
      name,
      repo,
    } = this.state;

    return (
      <RepoView
        name={name}
        repo={repo}
      />
    );
  }
}

export { RepoContainer };
