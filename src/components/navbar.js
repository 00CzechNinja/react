import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Corenavbar() {
  return (
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Michael Tusk</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="facts">Cat facts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Corenavbar;