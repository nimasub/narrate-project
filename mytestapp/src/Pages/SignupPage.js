import React from "react"
import '../components/App.css';
import Signup from "../components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"

function SignupPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  )
}

export default SignupPage