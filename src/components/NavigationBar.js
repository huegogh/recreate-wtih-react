import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  
    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb !important;

        &:hover {
            color: white !important;
        }
    }

    .navbar {
        background-color: #222;
    }

`;

export function NavigationBar(props) {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand>
                    <Nav.Link as={Link} to='/'>
                    &lt;huegogh /&gt; 
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                       {props.content.map(element =>(
                           <Nav.Item>
                            <Nav.Link as={Link}  to={element.path}>{element.linkName}</Nav.Link>
                        </Nav.Item>
                            ) )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}