import React from "react"
import '../styles/App.css';
import Signup from "../components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"

function SignupPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "40%" }}>
        <Signup />
      </div>
    </Container>
  )
}

export default SignupPage