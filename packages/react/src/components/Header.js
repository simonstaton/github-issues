import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      Github Issues
    </h1>
    <nav>
      <Link to="/">
        Homepage
      </Link>
    </nav>
  </header>
);

export { Header };
