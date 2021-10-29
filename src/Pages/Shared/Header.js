import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../images/logo.png';
import { BsTelephone, BsEnvelope, BsCart3 } from 'react-icons/bs';

const Header = () =>
{
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
                            <Nav.Link href="#pricing">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                Service
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                Things To Do
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <Button variant="btn btn-outline-dark">Login</Button>
                            </Nav.Link>
                            <NavDropdown title="Mithoon Ahmed" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">My Order</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Manage All Order</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Add a New Service</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <div className="text-center">
                                    <Button variant="btn btn-outline-dark" className="ms-auto">Logout</Button>
                                </div>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;