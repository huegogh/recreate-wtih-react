import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AboutCard } from '../restaurant-components/AboutCard.js';
import { AboutData } from '../restaurant-components/AboutData.js';
import AboutMain from '../../assets/restaurant-assets/AboutMain.jpg';


export function About() {
    return (

        <Container fluid className="container-fluid p-5">
            <Row className="row">
                <Col className="col-12 col-lg-5 order-1 order-lg-0">
                    <img
                        src={AboutMain}
                        alt="Two dogs looking at table with eggs, cinammon, and flour on it"
                        width="100%"
                        className="height100"
                    />
                </Col>
                <Col className="col-12 col-lg-7 bg-light px-4 py-3 mb-3 mb-lg-0 order-0 order-lg-1">
                    <h1 id="story">The Story Behind the Grill</h1>
                    <p>
                        Malesuada fames ac turpis egestas integer eget aliquet nibh
                        praesent. Mattis molestie a iaculis at erat pellentesque adipiscing
                        commodo. Quisque non tellus orci ac auctor augue. Tincidunt augue
                        interdum velit euismod in pellentesque massa. Vel pharetra vel
                        turpis nunc. Risus pretium quam vulputate dignissim suspendisse in
                        est. Viverra nibh cras pulvinar mattis nunc sed blandit libero.
                        Aenean pharetra magna ac placerat. Etiam sit amet nisl purus.
                        Sollicitudin tempor id eu nisl nunc mi ipsum. Non tellus orci ac
                        auctor augue. Suspendisse sed nisi lacus sed viverra tellus in hac.
                        Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
                        Dignissim sodales ut eu sem integer vitae. Facilisis magna etiam
                        tempor orci eu. Pharetra pharetra massa massa ultricies mi quis.
                        Mattis rhoncus urna neque viverra justo nec. Egestas purus viverra
                        accumsan in nisl nisi scelerisque.
          </p>
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
            <Row>
                <Col className="col-12 bg-white text-center my-3 py-2">
                    <h3>Our Team</h3>
                </Col>
            </Row>

            <Row className='mx-n4'>
                {AboutData.map(entry =>
                <AboutCard
                    key={entry.title}
                    title={entry.title}
                    ImageSrc={entry.src}
                    alt={entry.alt}
                    text={entry.text} />)}
                
            </Row>
        </Container>

    );
}