import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Logo from "./narratelogo.png"
import ErrorPage from "./Pages/ErrorPage";

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
      <Nav.Link href="/about"> About </Nav.Link>
      <Nav.Link href="/profile"> Profile </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
   </Router>
  );
}

export default App;