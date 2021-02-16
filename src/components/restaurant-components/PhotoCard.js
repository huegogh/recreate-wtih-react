import Col from 'react-bootstrap/Col';
export function PhotoCard(props) {
    return (
        <Col className="col-12 col-md-6 col-lg-4 col-xl-3 pb-3">
            <div className="card photo-card rounded-0 w-100">
                <img src={props.src}
                    className="card-img-top rounded-0"
                    alt={props.alt} />
            </div>
        </Col>
    );
}