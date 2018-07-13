import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const HomepageView = ({
  onChange,
  onSubmit,
  request,
  organisation,
  repositories,
}) => (
  <main>
    <Helmet>
      <title>
        Github Issue Finder
      </title>
      <meta name="description" content="Github issue finder" />
    </Helmet>
    <form onSubmit={onSubmit}>
      <label htmlFor="organisation">
        Organisation
        <input id="organisation" type="text" onChange={onChange} value={organisation} />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
    {request === 'loading' && (
      <p>
        Loading...
      </p>
    )}
    {request === 'error' && (
      <p>
        Error
      </p>
    )}
    {request === 'loaded' && (
      <Redirect to={
        {
          pathname: organisation,
          state: { repositories },
        }
      }
      />
    )}
  </main>
);

HomepageView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
  organisation: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
