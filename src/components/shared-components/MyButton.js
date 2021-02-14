import Button from 'react-bootstrap/Button';

export function MyButton (props) {
    return (
        <Button
        variant={props.color}
        type={props.type}
        className={props.className}>
            {props.children}
        </Button>
    );
}