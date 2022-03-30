import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import Sound from '../volume-up-fill.svg'
import "../styles/interview.css"

function Interview() {
    return (
        <>
        <Container className="gray interview-outer">
            <Card className="interview-card">
                <Row>
                    <Col md={5} className="interview-card-left">

                        <Row className="record-btn-outer">
                            <button type="button" className="btn record btn-circle btn-xl">
                                <img src={Sound}/>Record</button>
                        </Row>
                        <Row>
                            <Col><button type="button" className="btn">Rerecord</button></Col>
                            <Col><button type="button" className="btn">Play/Pause</button></Col>
                            <Col><button type="button" className="btn">Save/Next</button></Col>
                        </Row>

                    </Col>
                    <Col md={7} className="interview-card-right">
                        <Card.Body style={{paddingTop: "10%", margin: "auto"}}>
                            <Card.Title>Question</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Please answer the questions below to the best of your ability!</Card.Subtitle>
                            <Card.Text>
                            1. Tell me about your childhood.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <ButtonGroup style={{marginLeft: "10%"}}>
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
            </ButtonGroup>       
        </Container>
        </>
    );
}

export default Interview;