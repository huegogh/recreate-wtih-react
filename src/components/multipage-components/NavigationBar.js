import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

export function NavigationBar() {
    return (
        <Row className="mb-5 fixed-top">
            <Col>
                <Styles>
                    <Navbar className="navbar-dark bg-custom">
                        {/* <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-custom"> */}
                        <a className="navbar-brand" href="./index.html">
                            <img
                                src={Logo}
                                width="48"
                                height="48"
                                className="d-inline-block align-center"
                                alt=""
                                loading="lazy"
                            />
                    Takoyaki
                    </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"
                                    >Home <span className="sr-only">(current)</span></a
                                    >
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Review Lists
                  </a>
                                    <div
                                        className="dropdown-menu bg-custom"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item white" href="./Pages/anime.html"
                                        >Anime List</a
                                        >
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item white" href="./Pages/games.html"
                                        >Video Game List</a
                                        >
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="./Pages/contact.html"
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        {/* </nav> */}
                    </Navbar>
                </Styles>
            </Col>
        </Row>
    );
}