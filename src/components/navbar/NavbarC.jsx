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
          <Nav className="mx-auto nav-item">
              <a className="" href="#inicio">Inicio</a>
              <a className="" href="#menu">Menú</a>
              <a className="" href="#sobre-nosotros">Sobre nosotros</a>
              <a className="" href="#contacto">Contacto</a>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};
