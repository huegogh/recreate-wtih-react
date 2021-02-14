import { Layout } from '../shared-components/Layout.js';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlueBG from '../../assets/multipage-assets/Watercolor.png';
import { Header } from '../multipage-components/Header.js';
import { MediaEntry } from '../multipage-components/MediaEntry.js';
import { GamesList } from './GamesList.js';


const Styles = styled.div`
    .bg-blue {
        background: url(${BlueBG}) repeat top;
        min-height: calc(100vh - 144px);
    }
`;

export function VideoGames() {
    return (
        <Styles>
            <Layout className='bg-blue'>
                <Row className='mx-5'>
                    <Col className='bg-white my-5'>
                        <Header>
                            Video Games | Top 10
                        </Header>
                        {GamesList.map(Anime =>
                            <MediaEntry
                            key={Anime.number.toString()}
                            number= {Anime.number}
                            title= {Anime.title}
                            squareImage= {Anime.squareImage}
                            imageAlt= {Anime.title}
                            videoLink= {Anime.videoLink}
                            about={Anime.about}
                             />
                            )}
                </Col>
                </Row>
            </Layout>
        </Styles>
    );
}