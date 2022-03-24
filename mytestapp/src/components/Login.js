import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import  firebaseapp from "../firebase"
import "./../styles/login.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [ error, setError ] = useState('')
  const [ loading, setLoading ] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      try {
        setError("")
        setLoading(true)
        const auth = getAuth(firebaseapp)
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
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
                  <Form.Group id="email">
                      <Form.Label>Email</Form.Label> 
                      <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                      <Form.Label>Password</Form.Label> 
                      <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">Login</Button> 
              </Form>
          </div>
      </div>
      </div>
    </>
  )
}
