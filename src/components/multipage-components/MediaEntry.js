import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import stars  from '../../assets/multipage-assets/star-rating.svg'

export function MediaEntry(props) {
    return (
        <Row className="my-5">
            <Col>
                <Row>
                    <Col className="pl-4">
                        <h3 className="font-weight-bold">
                            #{props.number} {props.title}<img
                                src={stars}
                                height="24px"
                                className="mx-3"
                            />
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="col-12 col-lg-2 d-flex flex-lg-column justify-content-between align-items-center mb-2"
                    >
                        
                        {Array(3).fill(<img
                            src={props.squareImage}
                            width="128px"
                            alt={props.imageAlt}
                        />)}
                    </Col>
                    <div className="col">
                        <p>
                            {props.about}
                  </p>
                        <iframe
                            width="100%"
                            height="315px"
                            src={props.videoLink}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Row>
            </Col>
            <hr />
        </Row>
    );
}