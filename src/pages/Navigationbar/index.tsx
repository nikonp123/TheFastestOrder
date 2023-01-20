import NavbarList from '../../components/NavbarList';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigationbar() {
  return (
    <header>
      <Navbar expand="sm" fixed="top" bg="dark" variant="dark">
        <NavbarList />
      </Navbar>
    </header>
  );
}
