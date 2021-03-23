import "./Header.sass";
import PropTypes from "prop-types";
import { Row, Nav, Navbar } from "react-bootstrap";
import { AiOutlineLeft } from "react-icons/ai";
import { HiOutlineCog } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from "react-router-dom";

import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            {" "}
            {headerTitle}{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#search">
              <BsSearch size={30} id="icon" />
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/checkout">
                  <AiOutlineShoppingCart size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/home">
                  <HiOutlineCog id="icon" size={30} />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const Header1 = ({ title }) => {
  return (
    <div>
      <Row>
        <div className="col-6">
          <Row>
            <div className="col-2">
              <AiOutlineLeft id="header-back-icon" size={30} />
            </div>
            <div className="col-10">
              <h3> Title </h3>
            </div>
          </Row>
        </div>
        <div className="col-6">
          <BsSearch size={30} id="icon" />
          <AiOutlineShoppingCart size={30} />
          <HiOutlineCog id="icon" size={30} />
        </div>
      </Row>
    </div>
  );
};

export default Header;
