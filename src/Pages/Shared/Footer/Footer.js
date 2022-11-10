import React from "react";
import Nav from "react-bootstrap/Nav";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-dark rounded-2 text-white">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center p-5 my-4 border-top">
        <div>
          <img
            className="img-fluid w-50 rounded-circle mx-2"
            src={logo}
            alt=""
          />
          <h4 className="fw-bold text-warning">
            <span className="text-danger">Photo</span>Graph
          </h4>
        </div>
        <div>
          <Nav className="flex-column">
            <Nav.Link className="text-white fw-bold">Home</Nav.Link>
            <Nav.Link className="text-white fw-bold">Blog</Nav.Link>
            <Nav.Link className="text-white fw-bold">About</Nav.Link>
          </Nav>
        </div>
        <div>
          <h4 className="text-warning text-center">Follow On Us</h4>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="ms-3">
              <button className="btn btn-primary">
                <FaFacebook />
              </button>
            </li>
            <li className="ms-3">
              <button className="btn btn-info">
                <FaTwitter />
              </button>
            </li>
            <li className="ms-3">
              <button className="btn btn-danger">
                <FaInstagram />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
