import { MyButton } from '../shared-components/MyButton.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StickToBottom = styled.div`

    .back-button {
        position: fixed;
        bottom: -4px;
        right: 20px;
    }
    
`;

export function BackButton() {
    return (
        <StickToBottom>
            <Link to="/">
            <MyButton className="back-button" color="info">
                Back Home
            </MyButton>
            </Link>
        </StickToBottom>
    );
}