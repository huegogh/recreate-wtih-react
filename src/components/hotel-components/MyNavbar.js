import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Logo from "../../assets/hotel-assets/Logo.png";

const Styles = styled.div`
    .bg-custom {
        background-color: #000324;
    }

    .nav-link {
        color: #E5FEFF !important;
        margin-left: 4px;
        margin-right: 4px;
        padding-bottom: 0;
    }
    
    .nav-link:hover {
        border: 2px solid white;
    }
`;

export function MyNavbar(props) {
    return (
        <Styles>
            <Row>
                <Col className="px-0">
                    <Navbar
                    variant="dark"
                    className="bg-custom"
                    expand="md">
                        <Navbar.Brand className='d-md-none'>La Petite Maison</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="text-white">
                            <Nav className="mx-auto d-flex align-items-end">
                                <Nav.Link href="#overview">Overview</Nav.Link>
                                <Nav.Link href="#rooms">Rooms</Nav.Link>
                                <Nav.Link href="#packages">Packages</Nav.Link>
                                    <img
                                    src={Logo}
                                    className="d-none d-md-block"
                                    alt="Logo of La Petite Maison" />
                                <Nav.Link href="#amenities">Amenities</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#reserve">Reserve</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Styles>
    );
}

