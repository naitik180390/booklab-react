import React from 'react';
import  {Nav,Navbar,Form,Button,FormControl,Container} from 'react-bootstrap';
import './Navbar.css';

import {Link} from 'react-router-dom';
function NavBar(){
    return(<div>
        <Navbar bg="dark" variant="dark" sticky="top" >
            <Container>
            <Link to = {'/'}>
            <Navbar.Brand href="#home">BookLab</Navbar.Brand></Link>
            <Nav className="me-auto">
                <Link to = {'/booklist'}>
                <Nav.Link href="#home">Books</Nav.Link>
                </Link>
            
            </Nav>
            </Container>
        </Navbar>
  </div>)
}
export default NavBar;