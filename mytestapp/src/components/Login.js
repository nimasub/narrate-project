import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import  firebaseapp from "../firebase"
import "./../styles/login.css"
import "./../styles/App.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
      e.preventDefault()

      try {
        setError("")
        setLoading(true)
        const auth = getAuth(firebaseapp)
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        navigate('/profile')
      } catch(error) {
        var errorcode = error.code
        var errormessage = error.message
        setError("Failed to login" + errorcode + errormessage)
      }

      setLoading(false)
  }

  return (
    <>
    <div className="login">
      <div className=""> 
          <div className="">
              <h2 className="text-center mb-4"> Login </h2>
              {error && <Alert variant="danger"> {error} </Alert>}
              <Form onSubmit={handleSubmit}> 
                  <Form.Group className="form-group" id="email">
                      <Form.Label>Enter Your Email</Form.Label> 
                      <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group className="form-group" id="password">
                      <Form.Label>Enter Your Password</Form.Label> 
                      <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Container className="button-container text-center">
                    <Button disabled={loading} className="w-10 login-button green" type="submit">Login</Button> 
                  </Container>
              </Form>
          </div>
      </div>
      </div>
    </>
  )
}
