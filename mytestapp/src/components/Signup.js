import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
//import  firebaseapp from "../firebase"
import firebaseapp from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from 'axios';
import "./App.js"
import "./../styles/App.css"
import "./../styles/login.css"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(false)


  const nameRef = useRef();
  const ageRef = useRef();
  const navigate = useNavigate();

  

  async function handleSubmit(e) {
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
      }

      try {
        setError("")
        setLoading(true)
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        setData(); 

        //navigate.push('/profile');
      } catch(error) {
        var errorcode = error.code
        var errormessage = error.message
        setError("Failed to create an account" + errorcode + errormessage)
      }

      setLoading(false)
  }

  function getUsername(email) {
    let em_split = email.split('@');
    let username = em_split[0]+em_split[1].split('.')[0];
    return username;
}
  async function setData() {
    const username = getUsername(emailRef.current.value);
    const db = getDatabase();
    console.log(db);
    set(ref(db, 'users/' + username), {
        email: emailRef.current.value,
        name: nameRef.current.value,
        age: ageRef.current.value
    });
  }
 

  return (
    <>
      <Card className = "signup"> 
          <Card.Body>
              <h2 className="text-center mb-4"> Sign Up </h2>
              {error && <Alert variant="danger"> {error} </Alert>}
              <Form onSubmit={handleSubmit}> 
              <Form.Group className="form-group" id="name">
                      <Form.Label>Name</Form.Label> 
                      <Form.Control type="name" ref={nameRef} required />
                  </Form.Group>
                  <Form.Group className="form-group" id="email">
                      <Form.Label>Email</Form.Label> 
                      <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group className="form-group" id="age">
                      <Form.Label>Age</Form.Label> 
                      <Form.Control type="age" ref={ageRef} required />
                  </Form.Group>
                  <Form.Group className="form-group" id="password">
                      <Form.Label>Password</Form.Label> 
                      <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group className="form-group" id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label> 
                      <Form.Control type="password" ref={passwordConfirmRef} required />
                  </Form.Group>
                  <Container className="button-container text-center">
                    <Button disabled={loading} className="w-10 login-button green" type="submit">Sign Up</Button> 
                  </Container>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="../login"> Log In </Link> 
      </div>
    </>
  )
}


// import 'bulma/css/bulma.css';
// import '../styles/createAccount.css';
// import React, { useRef, useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { Link, useHistory} from "react-router-dom";
// import axios from 'axios';

// export default function CreateAccount() {
    
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const nameRef = useRef();
//     const ageRef = useRef();
//     const[title, setTitle] = useState();
//     const { signup } = useAuth();
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const history = useHistory();


//     function handleRadio(event) {
//         //console.log(event.target.value);
//         setTitle(event.target.value);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();

//         try {
//             setError("");
//             setLoading(true);
//             await signup(emailRef.current.value, passwordRef.current.value);
//             setData(); 
//             history.push('/profile');
             

//         } catch {
//             setError("Something went wrong. Try again");
//         }
        
//         setLoading(false);
//     }

//     function getUsername(email) {
//         let em_split = email.split('@');
//         let username = em_split[0]+em_split[1].split('.')[0];
//         return username;
//     }

//     async function setData() {
//         const username = getUsername(emailRef.current.value);
//         const result = await axios({
//             method: 'put',
//             url: `https://cors-anywhere.herokuapp.com/https://b-vision-18af8.firebaseio.com/users/${username}.json`,
//             data: {
//                 email: emailRef.current.value,
//                 name: nameRef.current.value,
//                 age: ageRef.current.value,
//                 title: title,
//                 videos: ["google.com"]
//             }

//         });
//     }


//     return (<div className="create-account-container container">
//     <form className="accountform" onSubmit={handleSubmit}>
//         <h1 className="title">Create Account</h1>
//         <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//                 <input className="input" type="text" placeholder="Name" ref={nameRef} name="name"></input>
//             </div>
//         </div>
//         <div className="field">
//             <label className="label">Email Address</label>
//             <div className="control">
//                 <input className="input" type="text" placeholder="Username" ref={emailRef} name="username"></input>
//             </div>
//         </div>
//         <div className="field">
//             <label className="label">Password</label>
//             <div className="control">
//                 <input className="input" type="password" placeholder="Password" ref={passwordRef} name="password"></input>
//             </div>
//         </div>
//         <div className="field">
//             <label className="label">Age</label>
//             <div className="control">
//                 <input className="input" type="text" placeholder="Age" ref={ageRef} name="age"></input>
//             </div>
//         </div>
//         <div className="title-radio">
//         <label className="label">Title</label>
//             <div className="control" onChange={handleRadio}>
//                 <label className="radio">
//                     <input type="radio" name="answer" value="Teacher"/>
//                             Teacher
//                 </label>
//                 <label className="radio">
//                     <input type="radio" name="answer" value="Student"/>
//                             Student
//                 </label>
//                 <label className="radio">
//                     <input type="radio" name="answer" value="Choreographer"/>
//                             Choreographer
//                 </label>
//             </div>
//         </div>
//         <br/>
//         {error && <h2>{error}</h2>}
//         <div className="field">
//             <div className="control">
//                 <input className="button is-dark" type="submit" disabled={loading}/>
//             </div>
//         </div>
//     </form>
//     <hr/>
//     <div>
//         Already have an Account? <Link to="/login">Log In</Link>
//     </div>
// </div>);
// }
