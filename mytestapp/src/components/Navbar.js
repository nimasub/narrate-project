import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import Logo from "../narratelogo.png"
import "./../styles/App.css"
import "./../styles/colors.css"

function NarrateNavbar() {

  const { currentUser, logout } = useAuth();
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  async function handleLogout() {
    setError('');
    try {
        await logout();
        navigate('/login')
    } catch {}
    setError('Failed to log out');
}

  let auth = useAuth();
  //console.log(auth);

    return(
<>
<div id="wrapper">
<Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="teal" >
<Navbar.Brand href="/">
      <img alt="" src={Logo} width="80" height="50" className="d-inline-block align-top" /> 
  </Navbar.Brand>
</Navbar>
<Navbar collapseOnSelect expand="lg" variant="white" className="gray position-below" fixed="top">

    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="justify-content-center" style={{width:"30%"}}>
      <Nav.Link href="/"> Home </Nav.Link>
      <Nav.Link href="/instructions"> Instructions </Nav.Link>
    </Nav>
    <Nav  className="justify-content-end" style={{width:"60%"}}>
    {auth.currentUser == null ? <Nav.Link href="/login"> Login </Nav.Link> :
      <NavDropdown title="Your Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/interview">Start New Interview</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#" onClick={handleLogout} >Log Out</NavDropdown.Item>
      </NavDropdown>
      }
    
   
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
    </>

    
);
}

export default NarrateNavbar;