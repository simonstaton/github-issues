import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export const RepoView = ({
  name,
  repo,
}) => (
  <main>
    <Helmet>
      <title>
        Github Issue Finder
      </title>
      <meta name="description" content="Github issue finder" />
    </Helmet>
    <p>
      Showing issues for
      {name}
    </p>
    <ul>
      {repo.map(issue => (
        <li>
          <a href={issue.html_url}>
            {issue.title}
          </a>
        </li>
      ))}
    </ul>
  </main>
);

RepoView.propTypes = {
  name: PropTypes.string.isRequired,
  repo: PropTypes.object.isRequired, // eslint-disable-line
};
