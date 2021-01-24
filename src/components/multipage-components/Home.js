import { Layout } from '../shared-components/Layout.js';
import Carousel from 'react-bootstrap/Carousel';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import BoW from '../../assets/multipage-assets/breathOfTheWild.jpg';
import DS from '../../assets/multipage-assets/demonSlayer.jpg';
import ReZ from '../../assets/multipage-assets/reZeroWebsite.jpg';

export function Home() {
    return (
        <Layout>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={BoW}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={DS}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ReZ}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <h2>
                Home Page
        </h2>
        </Layout>
    );
}