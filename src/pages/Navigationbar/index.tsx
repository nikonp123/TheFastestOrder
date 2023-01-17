import NavbarList from '../../components/NavbarList';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigationbar() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <NavbarList />
      </Navbar>
    </header>
  );
}
