import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React, { useEffect, useRef, useState } from 'react'
import "./../styles/PreliminaryQ.css"
import axios from 'axios';


export default function PreliminaryQ({sendDataToParent}) {

    const [state, setState] = useState({});
    const [numTopics, setNumTopics] = useState(0);
    const [loading, setLoading] = useState(true);
    const [topicsArr, setTopicsArr] = useState(new Array(numTopics));
    const [selections, setSelections] = useState(new Array(numTopics).fill(false));
    const [filteredTopics, setFilteredTopics] = useState(new Array(0));

    async function countTopics() { 
        
        const result = await axios({
            method: 'get',
            url: `https://auth-dev-30353-default-rtdb.firebaseio.com/questionBank.json`,
            withCredientials: true
        }).then((x) => {
            const topics = Object.keys(x.data);
            const num = topics.length;
            setNumTopics(num);
            setSelections(new Array(num).fill(false));
            setTopicsArr(topics);
        });
        setLoading(!loading);  
    }

    function createButtons() {

        let topicButtons = [];
        for (let i = 0; i < numTopics; i++) {
            topicButtons.push(<button className="checkboxbutton"  key={i} value={i}>{topicsArr[i] }</button>);
        }
        return topicButtons
    }

    function changeButtonColor(element, updated, i) { 
        console.log("updated: " + updated);

        if (updated[i] == true) {
            element.style.backgroundColor = "rgb(5, 81, 96)";
        } else {
            element.style.backgroundColor = "rgba(128, 120, 120, 0.733)";
        }
    }

    
    
    function handleChange(e) {
        setLoading(true);
        let trues = selections.filter(x => x).length;
        if (trues < 5) {
            let button = e.target;
            const index = e.target.value;
            const updatedSelections = selections.map((item, i) => (i == index ? !item : item));
            setSelections(updatedSelections);
            setFilteredTopics(topicsArr.filter((item, i) => updatedSelections[i] == true));
            console.log(filteredTopics);
            changeButtonColor(button, updatedSelections, index);
            setLoading(false);
        } if (trues == 5) {
            let button = e.target;
            const index = e.target.value;
            if (selections[index]) {
                const updatedSelections = selections.map((item, i) => (i == index ? !item : item));
                setSelections(updatedSelections);
                setFilteredTopics(topicsArr.filter((item, i) => updatedSelections[i] == true));
                console.log(filteredTopics);
                changeButtonColor(button, updatedSelections, index);
                setLoading(false);
            } else {
                changeButtonColor(button, selections, index);
                setLoading(false);
            }
        }
        
    }

    //runs function once on load
    useEffect(() => {
        countTopics();
    }, []);

    // useEffect(() => {
    //     changeButtonColor();
    // }, [selections]);


    return (
        <>
            {!loading ?
             <Container className="gray interview-outer stack-top">

                 <div className="prelim-questions">
                     <p>Please select 1-5 topics that you would like to talk about in your interview!</p>
                <ButtonGroup
                type="checkbox"
                className="topics flex-wrap"
                onClick={handleChange}>
                    {createButtons()}
                </ButtonGroup>
                </div>
                
                <Row>
                <Col></Col>
                <Col>
                <Button className="float-end startint" onClick={() => sendDataToParent(filteredTopics)}>Start Interview</Button>
                </Col>
                </Row>
             </Container> : <Container></Container>}
        </>);
}