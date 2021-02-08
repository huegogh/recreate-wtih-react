import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Header(props) {
    return (
        <Row>
            <Col className='mt-3'>
                <h1 className='text-danger text-center'>
                    {props.children}
                </h1>
            </Col>
        </Row>
    );
}