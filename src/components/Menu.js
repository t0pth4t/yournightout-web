import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Navbar } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar inverse fixedTop>
            <Grid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">(Y)our night out</Link>
                    </Navbar.Brand>
                    <Link to="/info">Info</Link>
                    <Link to="/wizard">Get Started</Link>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Grid>
        </Navbar>
    )
}

export default Menu
