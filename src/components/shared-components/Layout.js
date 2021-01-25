import Container from 'react-bootstrap/Container';

export function Layout(props) {
    return (
    <Container fluid className={props.className}>
        {props.children}
    </Container>
    );
}