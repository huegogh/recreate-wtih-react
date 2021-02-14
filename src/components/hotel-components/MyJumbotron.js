import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Logo from "../../assets/hotel-assets/header.jpg";

const Styles = styled.div`    
    .jumbotron {
        height: 500px;
        background-image: url(${Logo});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        color: #E5FEFF;
    }

    .container {
        background-color: #00032499;
        height: 232px;
    }
`;


export function MyJumbotron(props) {
    return (
        <Styles>
            <Row>
                <Col className="px-0">
                    <Jumbotron fluid
                        className="d-flex align-items-center">
                        <Container className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-4">Run on the wheel of luxury</h1>
                            <p className="lead">
                                Explore everything the beach has to ffer in our relaxing resort.
                    </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Styles>
    );
}