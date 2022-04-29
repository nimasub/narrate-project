import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useAuth } from '../contexts/AuthContext';
import Logo from "../narratelogo.png"
import "./../styles/App.css"
import "./../styles/colors.css"

function NarrateNavbar() {

  const [signedIn, setSignedIn] = useState(false);

  let auth = useAuth();
  console.log(auth);

    return(
<>
<Navbar collapseOnSelect expand="lg" variant="dark" className="teal">
<Navbar.Brand href="/">
      <img alt="" src={Logo} width="80" height="50" className="d-inline-block align-top" /> 
  </Navbar.Brand>
</Navbar>
<Navbar collapseOnSelect expand="lg" variant="light" className="gray">

    
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
        <NavDropdown.Item href="#" onClick={auth.logout}>Log Out</NavDropdown.Item>
      </NavDropdown>
      }
    
   
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
    
);
}

export default NarrateNavbar;