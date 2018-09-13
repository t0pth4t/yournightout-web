import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">(Y)our night out</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <li>
                    <Link to="/info">Info</Link>
                </li>
                <li>
                    <Link to="/wizard">Get Started</Link>
                </li>
            </Nav>
        </Navbar>
    )
}

export default Menu
