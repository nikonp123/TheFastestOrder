import NavbarList from '../../components/NavbarList';
import Navbar from 'react-bootstrap/Navbar';

type Props = {};

export default function Navigationbar({}: Props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavbarList />
      </Navbar>
    </header>
  );
}
