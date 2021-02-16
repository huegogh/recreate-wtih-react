import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function MenuItem(props) {
    return (
        <Row className="row mb-3">
            <Col className="col-12 col-lg-9">
                <p className="menuItem">{props.name}</p>
                <p className="itemDesc">{props.description}</p>
            </Col>
            <Col className="col-12 col-lg-3 menuItem price pt-2 pb-3 text-right text-lg-left">
                {props.price}
			</Col>
        </Row>
    );
}