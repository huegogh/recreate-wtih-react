import { Layout } from '../shared-components/Layout.js';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoW from '../../assets/multipage-assets/breathOfTheWild.jpg';
import DS from '../../assets/multipage-assets/demonSlayer.jpg';
import ReZ from '../../assets/multipage-assets/reZeroWebsite.jpg';
import styled from 'styled-components';
import BlueBG from '../../assets/multipage-assets/Watercolor.png';
import { Footer } from '../multipage-components/Footer.js';

const Styles = styled.div`
    .bg-blue {
        background: url(${BlueBG}) repeat top;
        min-height: calc(100vh - 144px);
    }
`;

export function Home() {
    return (
        <Styles>
            <Layout className="bg-blue px-0 py-3">
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75 mx-auto"
                                    src={BoW}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75 mx-auto"
                                    src={DS}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75 mx-auto"
                                    src={ReZ}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Layout>
            <Footer />
        </Styles>
    );
}