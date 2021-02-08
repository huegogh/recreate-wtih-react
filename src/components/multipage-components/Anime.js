import { Layout } from '../shared-components/Layout.js';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlueBG from '../../assets/multipage-assets/Watercolor.png';
import { Header } from '../multipage-components/Header.js';
import { MediaEntry } from '../multipage-components/MediaEntry.js';
import { AnimeList } from './AnimeList.js';


const Styles = styled.div`
    .bg-blue {
        background: url(${BlueBG}) repeat top;
        min-height: calc(100vh - 144px);
    }
`;

export function Anime() {
    return (
        <Styles>
            <Layout className='bg-blue'>
                <Row className='mx-5'>
                    <Col className='bg-white my-5'>
                        <Header>
                            Anime | Top 10
                        </Header>
                        {AnimeList.map(Anime =>
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