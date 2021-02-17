import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from "../../assets/business-assets/Ninja-Panda-Offical-Logo.png";


export function NavigationBar(props) {

    let { url } = useRouteMatch();

    return (
            <Navbar  className="navbar navbar-dark bgDark lead" expand="lg">
                <Navbar.Brand>
                    <Nav.Link as={Link} to ={`${url}`} className='text-reset'>
                    <img
                                src={Logo}
                                width="64"
                                height="64"
                                className="d-inline-block align-center mx-2"
                                alt="Ninja Pandas official logo"
                                loading="lazy"
                            />
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
    );
}
