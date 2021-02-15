import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import room1 from "../../assets/hotel-assets/room1.jpg";
import room2 from "../../assets/hotel-assets/room2.jpg";
import room3 from "../../assets/hotel-assets/room3.jpg";
import bg2 from '../../assets/hotel-assets/bg2.jpg';

const Styles = styled.div`
#rooms {
    background-image: url(${bg2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

button {
    background-color: #004CC7 !important;
    font-family: SourceSansPro;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    border-radius: 0% !important;
}
`;

export function Rooms(props) {
    return (
        <Styles>
            <Row id='rooms'>

                <Col>
                    <Row className="my-3">
                        <Col>
                            <h2 className="text-center text-white">
                                Our Rooms
                    </h2>
                        </Col>
                    </Row>
                    <Row className="mb-3">

                        <Col xs={12} md={4}
                            className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room1} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>Queen Room</Card.Title>
                                    <Card.Text>
                                        <span class="font-sansPro font-weight-bold">850 SQ FT room with city view</span>
                                        <ul class="ml-n3">
                                            <li class="font-sansPro">One queen size bed</li>
                                            <li class="font-sansPro">Seed Bar, fireplace and large balcony</li>
                                            <li class="font-sansPro">Small kitchen with a refrigerator and stove</li>
                                        </ul>
                                    </Card.Text>
                                    <Button className='align-self-start mt-auto'>Reserve</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}
                            className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room2} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>King room</Card.Title>
                                    <Card.Text>
                                        <span class="font-sansPro font-weight-bold">950 SQ FT room with beach view</span>
                                        <ul class="ml-n3">
                                            <li class="font-sansPro">One king size bed</li>
                                            <li class="font-sansPro">Seed Bar, fireplace and large balcony</li>
                                            <li class="font-sansPro">Small kitchen with a refrigerator and stove</li>
                                        </ul>
                                    </Card.Text>
                                    <Button className='align-self-start mt-auto'>Reserve</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}
                            className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={room3} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>Beach Side Suite</Card.Title>
                                    <Card.Text>
                                        <span class="font-sansPro font-weight-bold">1500 SQ FT room with beach view</span>
                                        <ul class="ml-n3">
                                            <li class="font-sansPro">One California king size bed</li>
                                            <li class="font-sansPro">Second room with fireplace, hot tub, and balcony</li>
                                            <li class="font-sansPro">Seed Bar and coffee station</li>
                                            <li class="font-sansPro">Full kitchen with a refrigerator, stove, and island</li>
                                        </ul>
                                    </Card.Text>
                                    <Button className='align-self-start mt-auto'>Reserve</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>



            </Row>
        </Styles>
    );
}