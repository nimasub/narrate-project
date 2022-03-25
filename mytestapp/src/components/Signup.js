import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { Link } from "react-router-dom"
import  firebaseapp from "../firebase"
import "./App.js"
import "./../styles/App.css"
import "./../styles/login.css"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
      }

      try {
        /*setError("")
        setLoading(true)*/
        const auth = getAuth(firebaseapp)
        await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      } catch(error) {
        var errorcode = error.code
        var errormessage = error.message
        setError("Failed to create an account" + errorcode + errormessage)
      }

      //setLoading(false)
  }

  return (
    <>
      <Card className = "signup"> 
          <Card.Body>
              <h2 className="text-center mb-4"> Sign Up </h2>
              {error && <Alert variant="danger"> {error} </Alert>}
              <Form onSubmit={handleSubmit}> 
                  <Form.Group className="form-group" id="email">
                      <Form.Label>Email</Form.Label> 
                      <Form.Control type="email" ref={emailRef} required />
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
                    <Button disabled={loading} className="w-10 login-button green" type="submit">Login</Button> 
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
