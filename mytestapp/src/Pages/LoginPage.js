import React from "react"
import '../components/App.css';
import Login from "../components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"

function LoginPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Login />
      </div>
    </Container>
  )
}

export default LoginPage