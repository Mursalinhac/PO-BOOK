import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Order() {
    let { model } = useParams();
    console.log(model)
    return (
        <Container fluid>
            <Row>
                <Col md={7}>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col><Form.Label>Email address</Form.Label></Col> 
                                <Col><Form.Control type="email" placeholder="Enter email" /></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{model}</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
                <Col md={5}></Col>
            </Row>

        </Container>
    );
}

export default Order;