import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.svg";

const Menu = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="CloudOfDuty" style={{ width: "2.5rem" }} />
            <label>Cloud of Duty</label>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => {
                window.location.href = "/upload";
              }}
            >
              Upload
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
