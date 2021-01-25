import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import TwitterLogo from '../../assets/multipage-assets/twitterIcon.png';

const Styles = styled.div`
    .bg-custom {
        background-color: #0d1821;
    }
`;

export function Footer(props) {
    return (
        <Styles>
                    <Navbar className="bg-custom text-white" expand="md">
                        <Navbar.Brand>
                                <Nav.Link href="https://www.twitter.com/huegogh" target="_blank">
                                    <img
                                        src={TwitterLogo}
                                        width="32px"
                                        height="32px"
                                        alt="Twitter Icon"
                                    />
                                </Nav.Link>
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                                <Nav.Item className="mx-3">
                                    Copyright 2003-2020
                            </Nav.Item>
                                <Nav.Item className="mx-3">
                                    Copyright 2015-2020 Takoyaki Reviews, LLC all rights reserved
                            </Nav.Item>
                        </Nav>              
                    </Navbar >
        </Styles >
    );
}
