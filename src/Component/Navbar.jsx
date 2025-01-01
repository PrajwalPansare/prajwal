import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav">
        <Navbar.Brand href="#home">Todo-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#new">More Option</Nav.Link>
            <Nav.Link href="#link2">Contact</Nav.Link>
            <Button variant="outline-danger m-2">Login</Button>
            <Button variant="outline-danger m-2">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavExample;