import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import Sound from '../volume-up-fill.svg'
import "../styles/interview.css"
import Recorder from "../components/Recorder.js"
import PreliminaryQ from "../components/PreliminaryQ.js"
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useAuth } from '../contexts/AuthContext';


function Interview() {
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(0); 
    const [questionsArr, setQuestionsArr] = useState(new Array(0));
    const { currentUser, logout } = useAuth();
    const [hidePrelimComp, setHidePrelimComp] = useState(false);
    const [displayQ, setDisplayQ] = useState(new Array(0));
    const [topicsArrfromChild, setTopicsArrfromChild] = useState();

    const sendDataToParent = (childData) => {
        console.log(childData);
        setTopicsArrfromChild(childData);
        setHidePrelimComp(true);
        buildQuestionArray(childData);
    }
    
    // will alter to read from questionsBank
    async function getQuestionsByTopics(topic) {
        if (!loading) {
        const result = await axios({
            method: 'get',
            url: `https://auth-dev-30353-default-rtdb.firebaseio.com/questionBank/${topic}.json`,
            withCredientials: true
        });

        //console.log(result.data);
        setLoading(!loading);
        return result.data;
        }   
    }

    async function buildQuestionArray(childData) { 
        let finalArrofQ = new Array(childData.length + 1);
        let standardq = await getQuestionsByTopics("StandardQuestions");
        let arr1 = Object.keys(standardq);
        let q1 = arr1[Math.floor(Math.random() * arr1.length)];
        finalArrofQ[0] = q1;
        for (let i = 0; i < childData.length; i++) {
            console.log(childData[i]);
            let result = await getQuestionsByTopics(childData[i]);
            let allQarr = Object.keys(result);
            let chosenQ = allQarr[Math.floor(Math.random() * allQarr.length)];
            finalArrofQ[i+1] = chosenQ;
        }

        setDisplayQ(finalArrofQ);
        makeList(finalArrofQ);
    }

    function makeList(questions) {
        
        var p = document.createElement('p');
        var questionList = document.getElementById("questionList");
        
 
        for (let i = 0; i < questions.length; i++) {
            var li = document.createElement('li');
            let q = questions[i];
            console.log(q);
            li.innerHTML = q;
            console.log(li);
            questionList.appendChild(li);
        }
        console.log(questionList);
        return questionList;
    }



    function renderCard() { 
        return (<Container className="gray interview-outer">
        <Card className="interview-card">
            <Row>
                <Col md={5} className="interview-card-left">
                     <Row>
                        <Recorder></Recorder>
                    </Row>

                </Col>
                <Col md={7} className="interview-card-right">
                    <Card.Body style={{paddingTop: "10%", margin: "auto"}}>
                        <Card.Title>Question Card</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Please answer the questions below to the best of your ability!</Card.Subtitle>
                        <Card.Text></Card.Text>
                            <div>
                            <ol id="questionList"></ol>
                            </div>
                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>);
    }

    return (
        <div className="holder">
        {!hidePrelimComp ? 
        <PreliminaryQ className="stackTop" sendDataToParent={sendDataToParent}></PreliminaryQ> : <div></div>}
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
                        <Card.Title>Question Card</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Please answer the questions below to the best of your ability!</Card.Subtitle>
                        <Card.Text></Card.Text>
                            <div>
                            <ol id="questionList"></ol>
                            </div>
                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>
        </div>
    );
}

export default Interview;