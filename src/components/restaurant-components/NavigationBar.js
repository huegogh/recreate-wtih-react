import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from "../../assets/restaurant-assets/MuzzlesLogo.png";
import LogoMono from "../../assets/restaurant-assets/MuzzlesLogoMono.png";


export function NavigationBar(props) {

    let { url } = useRouteMatch();

    return (
            <Container className="container bg-header px-0">
                <Navbar className="navbar navbar-light px-0" expand="lg">
                    <Navbar.Brand>
                        <Nav.Link as={Link} to={`${url}`}>
                            <img src={Logo} className="muzzlesLogo align-top d-none d-sm-flex" alt="Muzzles Logo"
                                width="100%" height="auto" />
                            <img src={LogoMono} className="d-inline-block align-top d-sm-none" alt="Muzzles Logo Monogram"
                                width="" height="auto" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarMuzzles" />
                    <Navbar.Collapse id="navbarMuzzles">
                        <Nav className="ml-auto">
                            {props.content.map((element, i) => (
                                <Nav.Item key={i}>
                                    <Nav.Link className="mx-3 lead" as={Link} to={`${url}${element.path}`}>{element.linkName}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
    );
}

