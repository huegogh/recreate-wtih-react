import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
    .bg-custom {
        background-color: #0d1821;
    }
`;

export function Footer(props) {
    return (
        <Styles>
            <Row>
                <Col>
                    <Navbar className="bg-custom navbar-dark" expand="md">
    
                        <div class="row text-white">
                            <div class="col-12 col-md-4">
                                <div class="row">
                                    <div class="col"><p>Follow Us</p></div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <a href="https://www.twitter.com/huegogh">
                                            <img
                                                src="./Images/twitterIcon.png"
                                                width="32px"
                                                height="32px"
                                                alt="Twitter Icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 d-flex align-items-end">
                                <p>Copyright 2003-2020</p>
                            </div>
                            <div class="col-12 col-md-4 d-flex align-items-end">
                                <p>
                                    Copyright 2015-2020 Takoyaki Reviews, LLC all rights reserved
                                </p>
                            </div>
                        </div>
                    </Navbar>
                </Col>
            </Row>
        </Styles>
    );
}


    // <Navbar.Brand>
    //                 <Nav.Link as={Link} to ={`${url}`}>
    //                 <img
    //                             src={Logo}
    //                             width="48"
    //                             height="48"
    //                             className="d-inline-block align-center"
    //                             alt="Takoyaki Logo"
    //                             loading="lazy"
    //                         />
    //                 Takoyaki
    //                 </Nav.Link>
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="ml-auto">
    //                    {props.content.map((element, i) =>(
    //                        <Nav.Item key={i}>
    //                         <Nav.Link className="mx-3 lead" as={Link}  to={`${url}${element.path}`}>{element.linkName}</Nav.Link>
    //                     </Nav.Item>
    //                         ) )}
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Navbar >