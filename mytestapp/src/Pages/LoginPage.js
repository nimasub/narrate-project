import React from "react"
import '../styles/App.css';
import Login from "../components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import Logo from "../narratelogo.png"


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