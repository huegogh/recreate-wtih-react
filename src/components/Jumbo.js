import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import backgroundImage from '../assets/logo192.png';
import backgroundImageTwo from '../assets/night-view.jpg';

const Styles = styled.div`
    .jumbo {
        background:url(${backgroundImageTwo});
        color: #ccc;
        height: calc(100vh - 72px);
        position: relative;
        z-index: -3;
    }

    .react-bg {
        background: url(${backgroundImage}) no-repeat top;
        position: absolute;
        height: 200px;
        width: 200px;
        top: 10;
        right: 10%;
        margin: 0 auto;
        z-index: -1;
        animation: rotation 10s infinite linear;
    }

    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }

    .overlay {
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export function Jumbo() {
    return (
        <Styles className="mb-n5">
            <Jumbotron fluid className='jumbo'>
                <div className='react-bg'></div>
                <div className='overlay'></div>
                <Container className='mt-5'>
                    <h1>React Projects</h1>
                    <p>Sites created with React, Bootstrap, and Stylized Components</p>
                </Container>
            </Jumbotron>
        </Styles>
    );
}