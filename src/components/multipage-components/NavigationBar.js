import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from "../../assets/multipage-assets/Takoyaki_Anime_Logo.jpg";


const Styles = styled.div`
    .bg-custom {
        background-color: #0d1821;
    }
`;

export function NavigationBar(props) {

    let { url } = useRouteMatch();

    return (
            <Styles>
            <Navbar  className="bg-custom navbar-dark" expand="md">
                <Navbar.Brand>
                    <Nav.Link as={Link} to ={`${url}`} className='text-reset'>
                    <img
                                src={Logo}
                                width="48"
                                height="48"
                                className="d-inline-block align-center mx-2"
                                alt="Takoyaki Logo"
                                loading="lazy"
                            />
                    Takoyaki
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                       {props.content.map((element, i) =>(
                           <Nav.Item key={i}>
                            <Nav.Link className="mx-3 lead" as={Link}  to={`${url}${element.path}`}>{element.linkName}</Nav.Link>
                        </Nav.Item>
                            ) )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}
