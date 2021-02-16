import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Logo from "../../assets/hotel-assets/Logo.png";

const Styles = styled.div`
    .bg-custom {
        background-color: #000324;
    }

    color: #E5FEFF;
}
`;

export function Footer(props) {
    return (
        <Styles>
                <Row id='contact' className="row py-4 bg-custom">
                    <Col className="col-12 d-flex justify-content-center">
                        <img src={Logo}
                        alt="Hotel Logo"
                        width="143px" height="100px" />
                    </Col>
                    <Col className="col-12 d-flex justify-content-center mt-3 nearlyWhite">
                        <p>123 Sunflower Seed Rd., Cavia, California 95205</p>
                    </Col>
                    <Col className="col-12 d-flex justify-content-center nearlyWhite">
                        <p>©LA PETITE MAISON HOTELS LIMITED 1939-2018. ALL RIGHTS RESERVED.</p>
                    </Col>
                </Row>
        </Styles>
    );
}