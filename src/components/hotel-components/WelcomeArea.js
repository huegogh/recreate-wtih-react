import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import hamster from "../../assets/hotel-assets/hamsterhomejpg.jpg";
import satisfaction from "../../assets/hotel-assets/awardsatisfaction.png";
import finest from "../../assets/hotel-assets/awardfinest.png";
import genuine from "../../assets/hotel-assets/awardgenuine.png";

const Styles = styled.div`
    
`;

export function WelcomeArea(props) {
    return (
        <Styles id='overview'>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={4} lg={3}>
                    <img src={hamster}
                        width="240px"
                        height="360px"
                        alt="Hamster in tiny beach chair eating pea pod" />
                </Col>
                <Col xs={10} md={5}>
                    <Row>
                        <Col>
                            <h1 className="font-dosis">Welcome to a hamster's paradise</h1>
                            <p className="font-sansPro">
                                Nestled in the heart of Cavia California, La Petite Maison is a luxury
                                hotel designed for the small mammal with extravagance in mind. Escape
                                to the warm comforts of stunning rooms, a relaxing spa, and a pool
                                with a beach side view. Inspired by the warm beauty of the California
                                Coast, we invite you to enjoy the rich accommodations along with our
                                unmatched luxury. Discover the satisfaction of indulging in our
                                quality rooms, and thank you for choosing La Petite Maison.
      </p>
                        </Col>
                        <Col xs={12}
                            className="d-flex justify-content-between">
                            <img className="d-none d-md-block py-2 w-md-25"
                                src={finest}
                                alt="award for excellence" />
                            <img className="w-xs-75 w-md-25"
                                src={satisfaction}
                                alt="certified for satisfaction guranteed" />
                            <img className="d-none d-md-block w-md-25"
                                src={genuine}
                                alt="award for genuine service" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Styles>
    );
}