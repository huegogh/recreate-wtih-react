import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../../assets/restaurant-assets/cateringHero.jpg';
import Maine from '../../assets/restaurant-assets/cateringMaine.jpg';
import Catering1 from '../../assets/restaurant-assets/catering1.jpg';
import Catering2 from '../../assets/restaurant-assets/catering2.jpg';
import Catering3 from '../../assets/restaurant-assets/catering3.jpg';


export function Catering() {
    return (
        <Container className="container-fluid px-5">
            <Row className="row my-3">
                <Col className="col-12 bg-white text-center my-3 py-2">
                    <h2>Catering</h2>
                </Col>
            </Row>

            <Row className="row my-5">
                <Col className="col-12">
                    <img
                        src={Hero}
                        width="100%"
                        alt="Table full of appetisers"
                    />
                </Col>
            </Row>
            <Row className="row my-5">
                <Col className="col-12 col-lg-5 order-1 order-lg-0">
                    <img
                        src={Maine}
                        alt="An hors d'oeuvre, appetiser or starter on a small dish"
                        width="100%"
                        className="height100"
                    />
                </Col>
                <Col
                    className="col-12 col-lg-7 bg-light px-4 py-3 mb-3 mb-lg-0 order-0 order-lg-1"
                >
                    <h3>Our Catering Services</h3>
                    <p>
                        Morbi tempus iaculis urna id. Aenean pharetra magna ac placerat. Mi
                        proin sed libero enim sed faucibus turpis in. Et ultrices neque
                        ornare aenean euismod. Quisque sagittis purus sit amet. Ultricies
                        tristique nulla aliquet enim tortor at auctor urna. Purus faucibus
                        ornare suspendisse sed. Tempor nec feugiat nisl pretium fusce id
                        velit ut tortor. Sed cras ornare arcu dui vivamus arcu felis.
                        Consectetur lorem donec massa sapien faucibus et molestie ac. Cum
                        sociis natoque penatibus et magnis dis parturient. Ut faucibus
                        pulvinar elementum integer enim. Vel risus commodo viverra maecenas
                        accumsan. Nec dui nunc mattis enim ut.
          </p>
                    <p>
                        Posuere lorem ipsum dolor sit amet. Sed odio morbi quis commodo odio
                        aenean. Tortor posuere ac ut consequat semper viverra nam libero.
                        Tellus elementum sagittis vitae et leo duis ut. Egestas quis ipsum
                        suspendisse ultrices gravida. Tempor commodo ullamcorper a lacus
                        vestibulum sed arcu non odio. Auctor augue mauris augue neque
                        gravida in fermentum et sollicitudin. Augue neque gravida in
                        fermentum et sollicitudin ac orci phasellus. Tristique senectus et
                        netus et. Dolor sit amet consectetur adipiscing elit ut aliquam.
                        Erat nam at lectus urna duis convallis convallis tellus. Egestas
                        purus viverra accumsan in nisl nisi scelerisque eu ultrices.
          </p>
                </Col>
            </Row>

            <Row className="row my-5 mx-2">
                <Col className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <img
                        src={Catering1}
                        width="100%"
                        alt="charcuterie board"
                    />
                </Col>
                <Col className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <img src={Catering2} width="100%" alt="3 hamburgers" />
                </Col>
                <Col className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <img
                        src={Catering3}
                        width="100%"
                        alt="appetisers in clear glasses"
                    />
                </Col>
            </Row>

        </Container>
    );
}