import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container'
import { Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../logos/Group 1329.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
const Header = () => {
    const[signInUser,setSignInUser]=useContext(userContext)
    return (
    <Container>
         <Navbar collapseOnSelect expand="lg" className="navbar-nav">
            <Navbar.Brand><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link ><Link id="nav-link" to="/home">home</Link></Nav.Link>
                <Nav.Link ><Link id="nav-link" to="/donate">donation</Link></Nav.Link>
                <Nav.Link ><Link id="nav-link" to="/blog">blog</Link></Nav.Link>
                <Nav.Link><Link id="nav-register" to="/registration">register</Link></Nav.Link>
                <Nav.Link ><Link id="nav-admin" to="/admin">admin</Link></Nav.Link>
            {signInUser.email && <Nav.Link ><Link id="nav-link">{signInUser.name}</Link></Nav.Link>}
                </Nav>
           </Navbar.Collapse>
        </Navbar>
    </Container>
    );
};

export default Header;