import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export interface IAppProps {}

export default function NavbarList(props: IAppProps) {
  const { i18n } = useTranslation();
  const showModalHandler = () => {};
  const onChangeLangHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Container>
      <Navbar.Brand>Belosvet TM</Navbar.Brand>
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
          <Button variant="primary" className="me-2" onClick={showModalHandler}>
            Log In
          </Button>
          <Button variant="primary" className="me-2" onClick={showModalHandler}>
            Sign out
          </Button>

          <Form.Select
            size="sm"
            aria-label="Default select example"
            className="w-auto"
            onChange={onChangeLangHandler}
          >
            <option value="ua">ua</option>
            <option value="ru">ru</option>
          </Form.Select>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
