import Col from 'react-bootstrap/Col';

export function AboutCard(props) {
    return (

        <Col className="col-12 col-md-6 col-xl-4 mb-2">
            <div className="card">
                <img
                    src={props.ImageSrc}
                    className="card-img-top"
                    alt={props.alt}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.text}
              </p>
                </div>
            </div>
        </Col>

    );
}