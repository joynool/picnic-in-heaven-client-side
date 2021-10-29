import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../images/logo.png';
import { BsTelephone, BsEnvelope, BsCart3 } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () =>
{
    const { user, logOut } = useAuth();

    return (
        <div className="sticky-top">
            <Navbar bg="dark" variant="dark">
                <Container className="flex-column flex-lg-row">
                    <Navbar.Text className="text-white"><BsEnvelope /> info@pih.com</Navbar.Text>
                    <Navbar.Text className="text-white"><BsTelephone /> +88017xxxxxxxx</Navbar.Text>
                    <Navbar.Text className="text-white"><BsCart3 /> 0 Items</Navbar.Text>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} width="200px" height="80px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">
                                Service
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#things-to-do">
                                Things To Do
                            </Nav.Link>
                            {
                                user.email ? <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.2">My Order</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Manage All Order</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Add a New Service</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <div className="text-center">
                                        <Button onClick={logOut} variant="btn btn-outline-dark" className="ms-auto">Logout</Button>
                                    </div>
                                </NavDropdown> : <Nav.Link as={Link} to="/login">
                                    <Button variant="btn btn-outline-dark">Login</Button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;