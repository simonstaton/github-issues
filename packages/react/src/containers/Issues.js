import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

class IssuesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        issues: []
    }
  }

  render() {
    // const { message, user } = this.props
    return (
        <main>
        <Helmet>
          <title>
            404 Not Found
          </title>
          <meta name="description" content="Github issue finder" />
        </Helmet>
          Issues
        </main>
    )
  }

}

export { IssuesContainer }
