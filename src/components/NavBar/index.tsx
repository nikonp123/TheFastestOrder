import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './style.scss';

export interface IAppProps {}

export default function NavBar(props: IAppProps) {
  return (
    <Container>
      <nav className="navbar">
        <span className="navbar__links">
          <Link className="navbar__link" to="/">
            Home
          </Link>
          <Link className="navbar__link" to="/about">
            About site
          </Link>
          <Link className="navbar__link" to="/login">
            Login
          </Link>
        </span>
      </nav>
    </Container>
  );
}
