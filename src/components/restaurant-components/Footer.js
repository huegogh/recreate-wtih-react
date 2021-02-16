import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoLogo from '../../assets/restaurant-assets/CompanyLogo.png';

export function Footer() {
    return (
        <Container className="container footerText pb-4 footerPad">
            <Row className="row justify-content-between">
                <Col className="col-6">
                    1357 Mutt Street, Rottweiler CA. 12345
                    <br />
                    Phone: 123-456-7890
                </Col>
                <Col className="col-6 rightJustify">
                    <img src={CoLogo} width="100px" />
                    <br />
                    Copyright © Muzzles Restaurant
                </Col>
            </Row>
        </Container>
    );
}