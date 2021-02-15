import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import twentyFour from "../../assets/hotel-assets/24hour.png";
import breakfast from "../../assets/hotel-assets/breakfast.png";
import valet from "../../assets/hotel-assets/valet.png";
import pool from '../../assets/hotel-assets/pool.png';
import bg from '../../assets/hotel-assets/bg.jpg'

const Styles = styled.div`
#amenities {
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.amenity {
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin-top: 40px;
}
`;
export function Amenities(props) {
    return (
        <Styles>
            <Row id='amenities'>
                <Col className='my-5'>
                    <Row className="row">
                        <Col className="col-12 text-white text-center">
                            <h2>Amenities</h2>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="col-12 text-white d-flex justify-content-center">
                            <p>Here at La Petite Maison, we invite you to enjoy our services in hopes that you have the most relaxing stay we can provide.</p>
                        </Col>
                    </Row>
                    <Row className="row my-5 d-flex justify-content-center">
                        <Col className="col-10 col-md-3">
                            <Row className="row d-flex justify-content-center">
                                <Col className="col-7 d-none d-md-block">
                                    <img
                                        src={twentyFour}
                                        alt="24 Hour Room Service"
                                        height="104px" width="150px" />
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className="col d-flex justify-content-center">
                                    <h4 className="amenity">24 Hour Room service</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-10 col-md-3">
                            <Row className="row  d-flex justify-content-center">
                                <Col className="col-7 d-none d-md-block">
                                    <img
                                        src={breakfast}
                                        alt="Complimentary Breakfast"
                                        height="104px" width="150px" />
                                </Col>
                            </Row>
                            <Row className="row">
                                <div className="col d-flex justify-content-center">
                                    <h4 className="amenity">Complimentary Breakfast</h4>
                                </div>
                            </Row>
                        </Col>
                        <Col className="col-10 col-md-3">
                            <Row className="row  d-flex justify-content-center">
                                <Col className="col-6 d-none d-md-block">
                                    <img
                                        src={valet}
                                        alt="Valet Parking"
                                        height="115px" width="100px" />
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className="col d-flex justify-content-center">
                                    <h4 className="amenity">Valet Parking</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-10 col-md-3">
                            <Row className="row  d-flex justify-content-center">
                                <Col className="col-7 d-none d-md-block">
                                    <img
                                        src={pool}
                                        alt="Beachside Pool"
                                        height="110px" width="150px" />
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className="col d-flex justify-content-center">
                                    <h4 className="amenity">Beachside Pool</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                </Col>
            </Row>
            <Row>

            </Row>
        </Styles>
    );
}