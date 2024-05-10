import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarHeader() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
          <Nav >
            <Nav.Link className='text-white text-uppercase' href="/">Inicio</Nav.Link>
            <Nav.Link className='text-white text-uppercase' href="/cartelera">Cartelera</Nav.Link>
            <Nav.Link className='text-white text-uppercase' href="/gestionar">Gestionar funciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader