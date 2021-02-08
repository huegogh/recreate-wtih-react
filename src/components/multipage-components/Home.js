import { Layout } from '../shared-components/Layout.js';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoW from '../../assets/multipage-assets/breathOfTheWild.jpg';
import DS from '../../assets/multipage-assets/demonSlayer.jpg';
import ReZ from '../../assets/multipage-assets/reZeroWebsite.jpg';
import styled from 'styled-components';
import BlueBG from '../../assets/multipage-assets/Watercolor.png';

const Styles = styled.div`
    .bg-blue {
        background: url(${BlueBG}) repeat top;
        min-height: calc(100vh - 144px);
    }

    .text-overlay {
        background-color: #ffffffaa;
        position: absolute;
        top: 50%;
        z-index: 1;
    }

    .carousel {
        z-index: 0;
    }
`;

export function Home() {
    return (
        <Styles>
            <Layout className="bg-blue px-0  d-flex align-items-center justify-content-center">
                <Row>
                    <Col>
                        <Layout>
                            <Row className='d-flex justify-content-center'>
                                <Col className='text-overlay text-center w-50'>
                                    <h1>
                                        Takoyaki
                            </h1>
                                    <h2>
                                        Video Game and Anime Reviews
                            </h2>

                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <Carousel className="carousel">
                                        <Carousel.Item>
                                            <img
                                                className="d-block mx-auto"
                                                src={BoW}
                                                alt="First slide"
                                                width="75%"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block mx-auto"
                                                src={DS}
                                                alt="Third slide"
                                                width="75%"
                                            />

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block mx-auto"
                                                src={ReZ}
                                                alt="Third slide"
                                                width="75%"
                                            />

                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                            </Row>
                        </Layout>
                    </Col>
                </Row>
            </Layout>
        </Styles>
    );
}