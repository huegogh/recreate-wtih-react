import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import wedding from "../../assets/hotel-assets/hamsterwedding.jpg";
import spring from "../../assets/hotel-assets/hamsterspring.jpg";
import cheese from "../../assets/hotel-assets/hamstercheese.jpg";

const Styles = styled.div`

`;

export function Packages(props) {
    return (
        <Styles>
            <Row className='my-3'>
      <Col>
        <h2 className="text-center">
            Packages
        </h2>
      </Col>
    </Row>
    <Row className="row mb-5 d-flex justify-content-center">
      <Col className="col-8">
        <Row className="row">
          <Col className="col-6 d-none d-md-block">
            <img
            src={wedding}
            alt="Hamster surrounded by heart shaped pillows"
            width="100%" />
          </Col>
          <Col className="col-12 col-md-6 d-flex flex-column justify-content-around">
            <h3>Beach Wedding package</h3>
            <h4 className="blue">Starting US $1,500.00</h4>
            <p>Feel the warmth of the beach as the flames in your hearts ignite during our romantic beach side wedding.
              All wedding packages include catering, an open bar, and one tier wedding cake (9" Vanilla standard cake).
              A private dinner for your closets family members and friends will be provided after the ceremony.</p>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-12 col-md-6 d-flex flex-column justify-content-around">
            <h3>Full Bloom package</h3>
            <h4 className="blue">Starting US $1,000.00</h4>
            <p>Enjoy the shade of our cherry trees as you join us during our spring time celebration. We invite you to
              our orchards for cherry, strawberry, and apple picking that is open all day. We end each evening with
              fresh, vegetable centric dinners along with a live show from local musicians.</p>
          </Col>
          <Col className="col-6 d-none d-md-block">
            <img src={spring}
            alt="Hamster beneath branch with blossoms" width="100%" />
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-6 d-none d-md-block">
            <img
            src={cheese}
            alt="Hamster infront of wedge of cheese and walnuts"
            width="100%" />
          </Col>
            <Col className="col-12 col-md-6 d-flex flex-column justify-content-around">
              <h3>Cheese and Seed Tour package</h3>
              <h4 className="blue">Starting US $1,200.00</h4>
              <p>Immerse yourself in the flavors of Cavia with our Cheese and Seed tour. We consulted with connoisseurs
                from around the globe to bring you the best flavors that nature has to offer, and create our cheeses
                right here at our local creamery. Cheese and seeds are served all day and nightly spa treatment is
                provided after dinner.</p>
            </Col>
        </Row>
      </Col>
    </Row>

        </Styles>
    );
}