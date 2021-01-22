import Button from 'react-bootstrap/Button';

export function MyButton (props) {
    return (
        <Button
        variant={props.color}
        className={props.className}>
            {props.children}
        </Button>
    );
}