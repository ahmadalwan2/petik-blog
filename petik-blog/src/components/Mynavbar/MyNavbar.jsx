import "./MyNavbar.css";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar className="Nav bg-primary" expand="lg">
      <Container>
        {/* Brand langsung jadi Link */}
        <Navbar.Brand as={Link} to="/">
          Petik Blog
        </Navbar.Brand>

        <Nav className="me-auto">
          {/* Nav.Link langsung jadi NavLink */}
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/posts">
            Posts
          </Nav.Link>
          <Nav.Link as={NavLink} to="/news">
            News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
