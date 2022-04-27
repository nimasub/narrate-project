import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/colors.css";

function Instructions() {
  return (
    <Container class="interview-outer1 gray">
      <div class="instructions-page">
        <h3>Welcome! Before you start your interview, please review this page!!</h3>
        <div class="instructions">
          <ol type="1">
            <li>Have a glass of water with you, your device charger nearby, and ensure you&#39;re in a quiet space for this interview. <strong>It must be done in one sitting!</strong></li>
            <li>To start your interview, click the “Start Interview” tab in the navigation bar</li>
            <li>You will be directed to a page that looks like this:</li>
            <li>After reading the prompt, click on the audio button to record your answer
              <ol type="a">
                <li>Tips on responding to an interview question:
                  <ol type="i">
                    <li>Read the prompt and come up with 1-2 talking points to address in your answer before recording</li>
                    <li>Take your time! Speak slowly and calmly</li>
                    <li>Don&#39;t worry if you mess up, you have the option to pause or re-record</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Once you stop the recording, it will show up here</li>
            <li>Click on the rendered play button to listen to your recording</li>
            <li>If you aren&#39;t satisfied with your recording, you have the option to record it!
              <ol type="a">
                <li>Do this by clicking the re-record button</li>
                <li>Click "Yes" when the following prompt shows up</li>
              </ol>
            </li>
            <li>Once you&#39;re satisfied with your answer click the "Save/Next" button and you&#39;ll be directed to the next question!
              <ol type="a">
                <li>Be sure to take your time answering the question because once you have clicked "Save/Next" you cannot come back to it!</li>
              </ol>
            </li>
            <li>Continue answering all the questions until your interview is complete!</li>

          </ol>
        </div>
      </div>
    </Container>
  );
}

export default Instructions;
