import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import footerImage from "../../assets/hotel-assets/hamsterreserve.jpg";

const Styles = styled.div`
#reserve-form {
    height: 500px;
    background-image: url(${footerImage});
    background-size: cover;
}

.bg-custom {
    background-color: #000324;
}

`;

export function Reservation(props) {
    return (
        <Styles>

            <Row id='reserve' className="row d-flex justify-content-center">
                <Col id="reserve-form" className="col-9 my-5">
                    <Row className="row py-4 bg-custom">
                        <Col className="col-12 text-white d-flex justify-content-center">
                            <h2>Reserve a Room</h2>
                        </Col>
                        <Col className="col-12 d-flex flex-row justify-content-around text-white">

                            <Row className="row d-flex justify-content-around py-2">
                                <Col className="col-10 col-md-6 col-lg-2">
                                    <label for="checkIn">Check-in</label>
                                    <input type="email" className="form-control" id="checkIn" aria-describedby="emailHelp" />
                                </Col>
                                <Col className="col-10 col-md-6 col-lg-2">
                                    <label for="checkOut">Check-out</label>
                                    <input type="email" className="form-control" id="checkOut" aria-describedby="emailHelp" />
                                </Col>
                                <Col className="col-10 col-md-6 col-lg-2">
                                    <label for="numOfGuests">Number of Guests</label>
                                    <input type="email" className="form-control" id="numOfGuest" aria-describedby="emailHelp" />
                                </Col>
                                <Col className="col-10 col-md-6 col-lg-2">
                                    <label for="roomType">Room Type</label>
                                    <input type="email" className="form-control" id="roomType" aria-describedby="emailHelp" />
                                </Col>
                                <Col className="col-10 col-md-6 col-lg-2">
                                    <button type="submit" className="btn btn-primary mt-4">Check Availability</button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Col>
            </Row>

        </Styles >
    );
}