import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export const HomepageView = ({ onSubmit, onChange, organisation, repositories }) => (
  <main>
    <Helmet>
      <title>
        404 Not Found
      </title>
      <meta name="description" content="Github issue finder" />
    </Helmet>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={organisation} />
      <button type="submit">
        Submit
      </button>
    </form>
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          Test
        </li>
      ))}
    </ul>
  </main>
);

HomepageView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  organisation: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
