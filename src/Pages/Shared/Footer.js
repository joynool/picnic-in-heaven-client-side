import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

/*-----------------------------------------------------
    Simple footer panel with navbar and social link
-------------------------------------------------------*/
const Footer = () =>
{
    return (
        <div className="bg-dark d-lg-flex justify-content-lg-around py-4">
            <div>
                <h5 className="text-center text-white fw-light ms-2">
                    <FaQuoteLeft /> We make your good memories  <FaQuoteRight />
                    <br />
                    Picnic In Heaven
                </h5>
                <Nav className="justify-content-center">
                    <Nav.Link as={HashLink} to="/home#home" className="text-white me-1 p-0">Home |</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#service" className="text-white me-1 p-0">Service |</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#things-to-do" className="text-white m-0 p-0">Things To Do</Nav.Link>
                </Nav>
            </div>
            <div className="my-4 my-lg-0">
                <h4 className="text-center text-white fw-light">Follow us on Social Media</h4>
                <Nav className="justify-content-center">
                    <Nav.Link href="/home" className="text-white fs-4" title="Facebook">
                        <FaFacebook />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-white fs-4" title="Twitter">
                        <FaTwitter />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-white fs-4" title="Google">
                        <FaGoogle />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-white fs-4" title="Instagram">
                        <FaInstagram />
                    </Nav.Link>
                </Nav>
            </div>
            <h3 className="my-auto text-center text-white fw-light fs-5">&copy; 2021 Picnic In Heaven</h3>
        </div>
    );
};

export default Footer;