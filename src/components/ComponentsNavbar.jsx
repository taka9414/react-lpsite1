import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const ComponentsNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="sticky-top" expand="md">
        <Navbar.Brand href="#">株式会社テスト</Navbar.Brand>

        <Navbar.Toggle className="ml-auto"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#">Section1</Nav.Link>
            <Nav.Link href="#">Section2</Nav.Link>
            <Nav.Link href="#">Section3</Nav.Link>
            <NavDropdown title="Section4">
              <NavDropdown.Item href="#">Section4_1</NavDropdown.Item>
              <NavDropdown.Item href="#">Section4_2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Section4番外編</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
