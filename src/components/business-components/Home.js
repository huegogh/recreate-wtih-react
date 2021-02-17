import Container from 'react-bootstrap/Container';
import { Jumbo } from './Jumbo.js';
import { Points } from './Points.js';
import { SkillsJumbo } from './SkillsJumbo.js';
import { Tabs } from './Tabs.js';
import { MailingList } from './MailingList.js';


export function Home() {
    return (
        <Container fluid>
            <Jumbo />            
            <Points />
            <SkillsJumbo />
            <Tabs />
            <MailingList />
        </Container>
    );
}