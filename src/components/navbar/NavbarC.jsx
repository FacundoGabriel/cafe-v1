import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import './NavbarC.css'

export const NavbarC = () => {
  return (
    <>
  <Navbar expand="lg" className="bg-light position-fixed navbar">
      <Container>
        <Navbar.Brand  to="/">
          <h3>Logo</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu-collapse">
          <Nav className="mx-auto">
            <Nav.Link className="nav-item" href="#home">Inicio</Nav.Link>
            <Nav.Link className="nav-item" href="#about">Sobre nosotros</Nav.Link>
            <Nav.Link className="nav-item" href="#menu">Menú</Nav.Link>
            <Nav.Link className="nav-item" href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
