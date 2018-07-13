import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const OrganisationView = ({
  repositories,
  organisation,
}) => (
  <main>
    <Helmet>
      <title>
        {organisation}
      </title>
      <meta name="description" content={`Github issue finder - repositories for ${organisation}`} />
    </Helmet>
    <h1>
      Showing repositories for
      {organisation}
    </h1>
    {repositories.length && (
      <ul>
        {repositories.map(repo => (
          <li>
            <Link to={`/${organisation}/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </main>
);

OrganisationView.propTypes = {
  organisation: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
