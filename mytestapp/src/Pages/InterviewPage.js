import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import Sound from '../volume-up-fill.svg'
import "../styles/interview.css"
import Recorder from "../components/Recorder.js"
import PreliminaryQ from "../components/PreliminaryQ.js"

function Interview() {
    const [loading, setLoading] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [questionsArr, setQuestionsArr] = useState(new Array(questionCount));


    // will alter to read from questionsBank
    // async function readData() {
    //     if (!loading) {
    //         const username = getUsername(currentUser.email);
    //         console.log(username);
    //     const result = await axios({
    //         method: 'get',
    //         url: `https://auth-dev-30353-default-rtdb.firebaseio.com/users/${username}.json`,
    //         withCredientials: true
    //     }).then((x) => setUserInfo(x.data));
    //     setLoading(!loading);
    //     }   
    // }
    return (
        <>
        {/* <PreliminaryQ></PreliminaryQ> */}
        <Container className="gray interview-outer">
            <Card className="interview-card">
                <Row>
                    <Col md={5} className="interview-card-left">
                         <Row>
                            <Recorder></Recorder>
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
            {/* <ButtonGroup style={{marginLeft: "10%"}}>
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
            </ButtonGroup>        */}
        </Container>
        </>
    );
}

export default Interview;