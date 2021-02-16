import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuItem } from './MenuItem.js';

export function MenuCard(props) {
    return (
        <>
            <Col className="col-12 col-md-6 px-0 pr-md-2 pb-3">

                <div className="menuCard height100">
                    <img className="card-img-top" src={props.src}
                        alt={props.alt} />

                    <div className="menu-card-body">
                        <Row className="row">
                            <Col className="col-12">
                                <h2 className="menuCardHeader">{props.header}</h2>
                                <p className="itemDesc menuSubhead">{props.subhead}</p>
                            </Col>
                        </Row>

                        {props.items.map(item => 
                    <MenuItem
                    key={item.itemName}
                    name={item.itemName}
                    description={item.description}
                    price={item.price} />)}


                    </div>
                </div>
            </Col>
        </>
    );
}