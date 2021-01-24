import Container from 'react-bootstrap/Container';

export function Layout(props) {
    return (
    <Container fluid className="px-0">
        {props.children}
    </Container>
    );
}