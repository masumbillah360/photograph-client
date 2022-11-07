import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand className="fw-bold text-warning">
          <span className="text-danger">Tasty</span> Bite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="ms-auto responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="fw-bold text-info">Sign Up</Nav.Link>
            <Nav.Link className="fw-bold text-primary">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
