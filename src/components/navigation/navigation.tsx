


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
//import { TypesOfPurchases } from '../types';
import NavigationItem from '../navigationItem/navigationItem';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>SpaceX</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/"> 
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavigationItem />
            </NavDropdown>
          </Nav>
          <Form style={{ maxWidth: "600px", display: "flex" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ marginTop: "10px" }} variant="outline-success">Search</Button>
          </Form>
          <Form className="d-flex">
            <Link to="/signup">
              <Nav style={{ color: "black" }}>Sign up</Nav>
            </Link>
            <Link to="/signin">
              <Nav style={{ color: "black" }}>Sign in</Nav> 
         
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
