import React from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css'

const Navigation = (props) => {
    return (
        <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand>
            <NavLink exact={+true} to="/">Manoj Bandara</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <LinkContainer to={'/owner-list'}>
                    <NavItem  exact={+true}  eventkey={1}  className={'shift-right'}>
                        Owner 
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={'/account-list'}>
                    <NavItem eventkey={2}>
                        Account 
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

