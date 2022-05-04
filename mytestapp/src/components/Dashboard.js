import React, { useState, useRef } from 'react';
import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useAuth } from '../contexts/AuthContext';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';



export default function Dashboard() { 

    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [editBool, toggleEdit] = useState(false);
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const nameRef = useRef();
    const ageRef = useRef();

    const navigate = useNavigate()
    const auth = getAuth();


    async function readData() {
        if (!loading && auth.currentUser) {
            setLoading(true);
            const username = getUsername(currentUser.email);
            console.log(username);
        const result = await axios({
            method: 'get',
            url: `https://auth-dev-30353-default-rtdb.firebaseio.com/users/${username}.json`,
            withCredientials: true
        }).then((x) => setUserInfo(x.data));
        setLoading(false);
        }   
    }

    async function updateInfo(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://auth-dev-30353-default-rtdb.firebaseio.com/users/${toupdate}/.json`,
            withCredientials: true,
            data: obj
        });
    }

    async function updateAll() {
        let username = getUsername(currentUser.email);
        await updateInfo(username, "name", nameRef.current.value);
        await updateInfo(username, "age", ageRef.current.value);
        userInfo.name = nameRef.current.value;
        userInfo.age = nameRef.current.value;
        toggle();
    }

    function toggle() {
        toggleEdit(!editBool);
    }

    async function handleLogout() {
        setError('');
        try {
            await logout();
            navigate('/login')
        } catch {}
        setError('Failed to log out');
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    
    readData();


    if (!userInfo) { return <h2>Please refresh the page in a few seconds</h2>; }
    else { return (
    <div>
         <Container className="gray interview-outer1">
            <Row>
                <Col>
                    <Row>
                        <h2 className="font-1">Name:</h2>
                    </Row>
                    <Row>
                        <h3 className="font-1 tab">     {userInfo.name ? userInfo.name: ""}</h3>
                    </Row>
                    <Row>
                       
                    </Row>
                    <Row>
                        
                    </Row>
                </Col>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row>
                    <h2 className="font-1">Email:</h2>
                             {/* Password:  */}
                    </Row>
                    <Row>
                    <h3 className="font-1">    {auth.currentUser == null ? "" : userInfo.email}</h3>
                        {/* ******** */}
                    </Row>
                </Col>
             </Row>
             <br/>
             <Row>

                 <Container>
                    <h2 className="font-1">My Stories:</h2>
                     <Row>

                     </Row>
                 </Container>
             </Row>

         </Container>

    </div>);
}
}