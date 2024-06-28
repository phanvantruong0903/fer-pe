import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Container } from 'react-bootstrap';

const Navbarheader = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" style={{height: "61.6px"}}>
        <Container>
          <Nav className="me-auto">
            <li><Link className="navlink" to="/">HOME</Link></li>
            <li><Link className="navlink" to="/dashboard">DASHBOARD</Link></li>
            <li><Link className="navlink" to="/contact">CONTACT</Link></li>
          </Nav> 
        </Container>
      </Navbar>
  );
};

export default Navbarheader;