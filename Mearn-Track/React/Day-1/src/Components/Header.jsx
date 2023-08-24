import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ fontSize: "150%" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h1>KR</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="m-4">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="m-4">
              About
            </Nav.Link>
            <Nav.Link href="#pricing" className="m-4">
              Projects
            </Nav.Link>
            <Nav.Link href="#pricing" className="m-4">
              Contacts
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Nav.Link>
            <Nav.Link href="#deets">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
