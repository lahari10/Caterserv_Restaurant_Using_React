import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown, Badge } from 'react-bootstrap';
import '../../Styles/Navbar.css';
import { FaShoppingCart } from "react-icons/fa";

const NavigationBar = () => {
    const [active, setActive] = useState('home');  // default active page
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (page) => {
        setActive(page);  // Set the active page state
        navigate('/' + page);  // Navigate programmatically
    }

    useEffect(() => {
        // Set the active state based on the current path
        const path = location.pathname; // This gets the current path
        if (path === '/') {
          setActive('home');
        } else if (path.startsWith('/about')) {
          setActive('about');
        } else if (path.startsWith('/events')) {
          setActive('events');
        } else if (path.startsWith('/menu')) {
          setActive('menu');
        } else if (path.startsWith('/contact')) {
          setActive('contact');
        } else if (path.startsWith('/blog')) {
          setActive('blog');
        }
      }, [location]);

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">Caterserv</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" onClick={() => handleClick("home")} 
                              style={{ borderBottom: active === "home" ? "2px solid black" : "" }}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" onClick={() => handleClick("about")} 
                              style={{ borderBottom: active === "about" ? "2px solid black" : "" }}>About</Nav.Link>
                    <Nav.Link as={Link} to="/menu" onClick={() => handleClick("menu")} 
                              style={{ borderBottom: active === "menu" ? "2px solid black" : "" }}>Menu</Nav.Link>
                    <Nav.Link as={Link} to="/events" onClick={() => handleClick("events")} 
                              style={{ borderBottom: active === "events" ? "2px solid black" : "" }}>Events</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/testimonial">Testimonials</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/404">404 Page</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact" onClick={() => handleClick("contact")} 
                              style={{ borderBottom: active === "contact" ? "2px solid black" : "" }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle variant='success'>
                <FaShoppingCart color='white' fontSize='25px'></FaShoppingCart>
                <Badge>{0}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth: 370}}>
                  <span style={{padding:5}}>Cart is empty!</span>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Navbar>   
    );
};

export default NavigationBar;
