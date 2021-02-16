import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HeroImage from '../../assets/restaurant-assets/homeHero.jpg';
import HomeSingle from '../../assets/restaurant-assets/homeSingle.jpg';
import HomeImage from '../../assets/restaurant-assets/HomeImage.jpg';


export function Home() {
    return (
        <>
            <Row>
                <Col className='px-0'>
                    <img
                        src={HeroImage}
                        className='hero-image' />
                </Col>
            </Row>
            <Container fluid className="container-fluid pt-5">
                <Row className="row d-flex justify-content-center">
                    <Col className="col-10 col-xl-4 order-1 order-xl-0 p-0 mr-xl-3">
                        <img className="height100" src={HomeSingle}
                            alt="Sandwich on cutting board with fries in miniature basket" width='100%' />
                    </Col>
                    <Col className="col-10 col-xl-6 my-3 my-xl-0 order-0 order-xl-1 bg-white">
                        <Row className="row">
                            <Col className="col-12 p-4">
                                <h1 className="text-left">Muzzles Sandwiches & Grill</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.</p>
                                <br />
                                <br />
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-12 px-0 mb-0">
                                <img src={HomeImage}
                                    alt="3 images, sandwhich, dog eating pizza, and 2 slider burgers"
                                    width='100%' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}