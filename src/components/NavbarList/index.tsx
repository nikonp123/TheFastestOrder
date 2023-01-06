import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CartButtonHeader from '../CartButtonHeader';
import { useAppSelector } from '../../hooks';
import { ESupportedLangs } from '../../config/i18nConfig';
export interface INavbarListProps {}

export default function NavbarList(props: INavbarListProps) {
  const { i18n } = useTranslation();

  const user = useAppSelector((state) => state.auth);
  const defaultLang = user.language;

  const showModalHandler = () => {};
  const onChangeLangHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const showCartHandler = () => {
    // setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    // setCartIsVisible(false);
  };

  return (
    <Container>
      <Navbar.Brand>Belosvet&copy;. Менеджер: {user.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto">
          {/* <Nav.Link> */}
          <Link to="/about" className="me-2">
            About
          </Link>
          {/* </Nav.Link> */}
          {/* <Nav.Link> */}
          <Link to="/home">Home</Link>
          {/* </Nav.Link> */}
          {/* <Nav.Link>
            <Link to="/users">Users</Link>
          </Nav.Link> */}
        </Nav>
        <Nav>
          {/* <Button variant="primary" className="me-2" onClick={showModalHandler}>
            Log In
          </Button>
          <Button variant="primary" className="me-2" onClick={showModalHandler}>
            Sign out
          </Button> */}

          <Form.Select
            size="sm"
            aria-label="Default select example"
            className="w-auto"
            onChange={onChangeLangHandler}
            value={defaultLang}
          >
            <option value={ESupportedLangs.ua}>{ESupportedLangs.ua}</option>
            <option value={ESupportedLangs.ru}>{ESupportedLangs.ru}</option>
          </Form.Select>
        </Nav>
      </Navbar.Collapse>
      <CartButtonHeader onClick={showCartHandler} />
    </Container>
  );
}
