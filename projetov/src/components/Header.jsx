import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ onLogout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Eventos Esportivos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sobre">
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} to="/circuito">
              Circuito
            </Nav.Link>
            <Nav.Link as={Link} to="/galeria">
              Galeria
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onLogout}>Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Header;
