import React from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    // using stat 

  const {user, logOut} = useAuth();



    return (

        // navbar section 

            <Navbar bg="white" expand="lg" sticky="top" className="shadow-lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className="logo">
        <img src="https://www.tripit.com/web/wp-content/uploads/sites/1/2018/12/logo-tripit.svg" alt="" className="img-responsive" width="165px" height="auto"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ "maxHeight": '100px' }}
        navbarScroll
      >

        {/* navlink section  */}

        <Nav.Link as={Link} to="/Services">Packages</Nav.Link>
        <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
      </Nav>

          {/* dynamic login and logout button show  */}

        {
          user?.email 
          ? 
          <Dropdown style={{"outline": "none"}} className="me-5">
            <Dropdown.Toggle variant="none" id="dropdown-basic" className="outline-none">
              <img src={user?.photoURL} alt="" className="img-fluid rounded-circle me-2" style={{"width": "35px"}}/>{user?.displayName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/my-orders">My Orders</Dropdown.Item>
              <Dropdown.Item as={Link} to="/manage-orders">Manage All Orders</Dropdown.Item>
              <Dropdown.Item as={Link} to="/add-new-services">Add A New Destination</Dropdown.Item>
              <Dropdown.Item as={Button} onClick={logOut}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
           :
           <Nav.Link as={Link} to="/login" className="me-2 ">
            <span><i className="fas fa-sign-in-alt"></i> <span className="btn__login">Log In / Sign Up</span></span>
        </Nav.Link>
        }
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;