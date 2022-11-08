import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("log Out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand className="fw-bold text-white">
          <Link to="/" className="nav-link">
            <span className="bg-secondary ps-2 rounded-start">Tasty</span>
            <span className="bg-danger pe-2 rounded-end">Bite</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="ms-auto responsive-navbar-nav">
          <Nav className="me-auto">
            {user?.email ? (
              <>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#features">My Reviews</Nav.Link>
                <Nav.Link href="#features">Add Service</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#features">Blog</Nav.Link>
              </>
            )}
          </Nav>
          {user?.email ? (
            <Nav className="ms-auto">
              <Link to="/signup" className="nav-link">
                {user?.displayName}
              </Link>
              <button onClick={handleLogOut} className="nav-link btn">
                Logout
              </button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
