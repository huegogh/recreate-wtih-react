import { PhotoCard } from './PhotoCard.js';
import { PhotosData } from './PhotosData.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Photos() {
    return (
        <Container className="container my-4  ">
            <Row className="row my-4 ">
                <Col className="col-12 whiteSectionHeaders centerCenter mx-0">
                    <h1 className="photosTitle">Photos</h1>
                </Col>
            </Row>
            <Row className="row d-flex justify-content-between mx-n4">
            {PhotosData.map((photo, i) =>
            <PhotoCard
            key= {i}
            src={photo.src}
            alt={photo.alt} />
            )}
            </Row>
        </Container>
    );
}