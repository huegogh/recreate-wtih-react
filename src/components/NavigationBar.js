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
        background-color: #000101;
    }

`;

export function NavigationBar(props) {
    return (
        <Styles>
            <Navbar defaultExpanded expand="md">
                <Navbar.Brand>
                    <Nav.Link target="_blank" href='https://github.com/huegogh/recreate-wtih-react'>
                    &lt;huegogh /&gt; 
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                       {props.content.map((element, i) =>(
                           <Nav.Item key={i}>
                            <Nav.Link className="mx-3 lead" as={Link}  to={element.path}>{element.linkName}</Nav.Link>
                        </Nav.Item>
                            ) )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}