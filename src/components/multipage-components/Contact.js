import { Layout } from '../shared-components/Layout.js';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MyButton } from '../shared-components/MyButton.js'
import BlueBG from '../../assets/multipage-assets/Watercolor.png';
import { Header } from '../multipage-components/Header.js';


const Styles = styled.div`
    .bg-blue {
        background: url(${BlueBG}) repeat top;
        min-height: calc(100vh - 144px);
    }
`;

export function Contact() {
    return (
        <Styles>
            <Layout className='bg-blue'>
                <Row className='mx-5'>
                    <Col className='bg-white my-5 pb-3'>
                        <Header>
                            Contact Us
                        </Header>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="password" placeholder='First & Last Name' />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                        ></textarea>
                                    </Form.Group>
                                    <MyButton color="success" type="submit">
                                        Submit
                                    </MyButton>
                                </Form>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Layout >
        </Styles >
    );
}