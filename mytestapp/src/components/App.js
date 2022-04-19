import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "../Pages/Home";
import Instructions from "../Pages/Instructions";
import Signup from "../Pages/SignupPage";
import Login from "../Pages/LoginPage";
import Interview from '../Pages/InterviewPage.js';
import Navbar from "./Navbar.js";
import ErrorPage from "../Pages/ErrorPage";
import NarrateNavbar from './Navbar.js';
import "../styles/App.css"
import Demo from "./Recorder.js";



function App() {
  return (
    <Demo></Demo>
  //   <Router> 
  //     <NarrateNavbar></NarrateNavbar>
  //   <Routes>
  //     <Route path="/" exact element={<Home />} />
  //     <Route path="/instructions" element={<Instructions />} />
  //     <Route path="/signup" element={<Signup />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/interview" element={<Interview/>}/>
  //   </Routes>
  //  </Router>
  );
}

export default App;