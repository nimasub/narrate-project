import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "../Pages/Home";
import Instructions from "../Pages/Instructions";
import Signup from "../Pages/SignupPage";
import Login from "../Pages/LoginPage";
import Logo from "../narratelogo.png"
import ErrorPage from "../Pages/ErrorPage";

function App() {
  return (
    <Router> 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="/">
      <img alt="" src={Logo} width="80" height="50" className="d-inline-block align-top" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="justify-content-end" style={{width:"90%"}}>
      <Nav.Link href="/"> Home </Nav.Link>
      <Nav.Link href="/instructions"> Instructions </Nav.Link>
      <Nav.Link href="/signup"> Sign Up </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </Router>
  );
}

export default App;