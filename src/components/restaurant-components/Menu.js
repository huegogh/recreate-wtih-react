import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuCard } from './MenuCard.js';
import { MenuData } from './MenuData.js';

export function Menu() {
    return (
        <>
        <Container className="container" style={{'paddingBottom': '50.6px', 'paddingTop':'40px'}}>
            <Row className="row">
                <Col className="col-12 whiteSectionHeaders centerCenter">
                    <h1>Our Menu</h1>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='row justify-content-between'>
                {MenuData.map(Card => 
                    <MenuCard
                     key={Card.header}
                     src={Card.src}
                     alt={Card.alt}
                     header={Card.header}
                     subhead={Card.subhead}
                     items={Card.items}/>)}
            </Row>
        </Container>
    </>
    );
}