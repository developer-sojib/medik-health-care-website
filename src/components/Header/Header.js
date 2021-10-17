import React from 'react';
import './Header.css'
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import useAuth from './../hooks/useAuth';



const Header = () => {

    const { user, logOut } = useAuth()

    const { photoURL, displayName, email } = user;

    return (
        <div className='sticky-lg-top'>
            <Navbar bg="white" className='shadow-sm pt-2 pb-2' expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' to="/home"><img width='100px' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} className='text-dark fw-bold' to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} className='text-dark fw-bold' to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} className='text-dark fw-bold' to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} className='text-dark fw-bold' to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} className='text-dark fw-bold' to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><Badge className='badge' bg="danger">0</Badge></Nav.Link>
                            {!user.displayName ? (<>
                                <Nav.Link as={NavLink} className='text-dark fw-bold' to="/login">Login</Nav.Link>
                                <Nav.Link as={NavLink} className='text-dark fw-bold' to="/signup">SignUp</Nav.Link>
                            </>) : (
                                <NavDropdown title={<img style={{ width: '45px', borderRadius: '50%' }} src={photoURL} alt="" />} >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>

                                        <button className='btn btn-danger' onClick={logOut}>Signout</button>
                                    </div>
                                </NavDropdown>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;