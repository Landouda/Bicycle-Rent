import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginScreen() {
    return (
        <div>
            <Form style={{
                width: "80%",
                margin: "auto",
                padding: "1rem"
            }}>
                <Form.Label style={{ weight: "bold", textAlign:"center" }}>Welcome!</Form.Label>
                <br></br>
                <Form.Control type="text" placeholder="Email Address"></Form.Control>
            </Form>
            <Form style={{
                width: "80%",
                margin: "auto"
            }}>
                <Form.Control type="text" placeholder="Password"></Form.Control>
            </Form>
            <Button variant="primary" type="submit" style={{ alignContent: "center" }}>Log In</Button>
        </div>
    );
}

export default LoginScreen;