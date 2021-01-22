import Container from 'react-bootstrap/Container';

export function Layout(props) {
    return (
    <Container fluid>
        {props.children}
    </Container>
    );
}