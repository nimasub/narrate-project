import React from "react"
import '../components/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"

function Home() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "600px" }}>
      <h3> Narrate. Your Stories. Your Voice. Your Legacy. </h3>
      <br></br>
      <h6> Everyone has a story to tell. The Narrate Project aims to provide a virtual interview platform to preserve the oral histories of users and their loved ones across space, time, and generations. </h6>
      <br></br>
      <p> Recorded oral histories are a great method for preserving your own legacy and that of your loved ones. However, achieving a well-produced product can take hours of interviewing and researching, which is not an ideal option for those with time constraints and financial restrictions. That’s where the Narrate Project comes in! Users will have access to an easy-to-use interviewing platform that allows our community to choose what they wish to encapsulate for the future generations of their families. </p>
      <p> The Narrate Project provides a variety of topics and questions to guide your storytelling adventure, with options that can be expanded constantly! Users will select which questions they are interested in and record their responses. After they have completed their story, they will receive a full-length monologue that they can share for years to come! </p>
      <p> Learn more at: <a href="https://www.narrateproject.com/"> https://www.narrateproject.com/ </a> </p>
      </div>
    </Container>
  )
}

export default Home