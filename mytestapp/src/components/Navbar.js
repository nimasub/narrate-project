import { Navbar, Nav } from "react-bootstrap"
import Logo from "../narratelogo.png"
import "./../styles/App.css"
import "./../styles/colors.css"

function NarrateNavbar() {
    return(

<Navbar collapseOnSelect expand="lg" variant="dark" className="teal">
    <Navbar.Brand href="/">
      <img alt="" src={Logo} width="80" height="50" className="d-inline-block align-top" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="justify-content-end" style={{width:"90%"}}>
      <Nav.Link href="/"> Home </Nav.Link>
      <Nav.Link href="/instructions"> Instructions </Nav.Link>
      <Nav.Link href="/signup"> Sign Up </Nav.Link>
      <Nav.Link href="/interview">Start Interview</Nav.Link> 
    </Nav>
    </Navbar.Collapse>
    </Navbar>
);
}

export default NarrateNavbar;