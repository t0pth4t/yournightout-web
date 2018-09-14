import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Menu = () => {
    return (
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">(y)our night out</Link>
                <Nav navbar>
                    <NavItem>
                        <Link className="nav-link" to="/info">FAQ</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/when">Get Started</Link>
                    </NavItem>
                </Nav>
            </Navbar>
    )
}

export default Menu
