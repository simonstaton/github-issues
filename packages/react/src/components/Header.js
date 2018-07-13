import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1>
        Github Issues
      </h1>
    </Link>
  </header>
);

export { Header };
