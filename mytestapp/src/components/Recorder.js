import "../styles/recorder.css"
import { Container, Card, Col, Row, Button, ButtonGroup } from 'react-bootstrap'

   

function Recorder() {

     //webkitURL is deprecated but nevertheless
     URL = window.URL || window.webkitURL;

     var gumStream; 						//stream from getUserMedia()
     var recorder; 						//MediaRecorder object
     var chunks = [];					//Array of chunks of audio data from the browser
     var extension;
     var recordButton;
     var stopButton;
     var pauseButton;
     let countRecordings = 0;
 
     window.addEventListener('load', function loader() {
        recordButton = document.getElementById("recordButton");
        stopButton = document.getElementById("stopButton");
        pauseButton = document.getElementById("pauseButton");
        //add events to those 3 buttons
        recordButton.addEventListener("click", startRecording, false);
        stopButton.addEventListener("click", stopRecording, false);
        pauseButton.addEventListener("click", pauseRecording, false);
      }, { once: false });
     
 
 
     // true on chrome, false on firefox
     console.log("audio/webm:"+MediaRecorder.isTypeSupported('audio/webm;codecs=opus'));
     // false on chrome, true on firefox
     console.log("audio/ogg:"+MediaRecorder.isTypeSupported('audio/ogg;codecs=opus'));
 
     if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')){
         extension="webm";
     }else{
         extension="ogg"
     }
 
 
     function startRecording() {
         if (countRecordings > 0) {
             // popup code (optional for demo)
             // delete all the recordings in the li
         }
         console.log("recordButton clicked");
 
         /*
             Simple constraints object, for more advanced audio features see
             https://addpipe.com/blog/audio-constraints-getusermedia/
         */
         
         var constraints = {audio: true}
 
         /*
             Disable the record button until we get a success or fail from getUserMedia() 
         */
 
         recordButton.disabled = true;
         stopButton.disabled = false;
         pauseButton.disabled = false
 
         /*
             We're using the standard promise based getUserMedia() 
             https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
         */
 
         navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
             console.log("getUserMedia() success, stream created, initializing MediaRecorder");
 
             /*  assign to gumStream for later use  */
             gumStream = stream;
 
             var options = {
             audioBitsPerSecond :  256000,
             videoBitsPerSecond : 2500000,
             bitsPerSecond:       2628000,
             mimeType : 'audio/'+extension+';codecs=opus'
             }
 
             //update the format 
             document.getElementById("formats").innerHTML='Sample rate: 48kHz, MIME: audio/'+extension+';codecs=opus';
 
             /* 
                 Create the MediaRecorder object
             */
             recorder = new MediaRecorder(stream, options);
 
             //when data becomes available add it to our attay of audio data
             recorder.ondataavailable = function(e){
                 console.log("recorder.ondataavailable:" + e.data);
                 
                 console.log ("recorder.audioBitsPerSecond:"+recorder.audioBitsPerSecond)
                 console.log ("recorder.videoBitsPerSecond:"+recorder.videoBitsPerSecond)
                 console.log ("recorder.bitsPerSecond:"+recorder.bitsPerSecond)
                 // add stream data to chunks
                 chunks.push(e.data);
                 // if recorder is 'inactive' then recording has finished
                 if (recorder.state == 'inactive') {
                 // convert stream data chunks to a 'webm' audio format as a blob
                 const blob = new Blob(chunks, { type: 'audio/'+extension, bitsPerSecond:128000});
                 createDownloadLink(blob)
                 }
             };
 
             recorder.onerror = function(e){
                 console.log(e.error);
             }
 
             //start recording using 1 second chunks
             //Chrome and Firefox will record one long chunk if you do not specify the chunck length
             recorder.start(1000);
 
             //recorder.start();
         }).catch(function(err) {
             //enable the record button if getUserMedia() fails
             recordButton.disabled = false;
             stopButton.disabled = true;
             pauseButton.disabled = true
         });
     }
 
     function pauseRecording(){
         console.log("pauseButton clicked recorder.state=",recorder.state );
         if (recorder.state=="recording"){
             //pause
             recorder.pause();
             pauseButton.innerHTML="Resume";
         }else if (recorder.state=="paused"){
             //resume
             recorder.resume();
             pauseButton.innerHTML="Pause";
 
         }
     }
 
     function stopRecording() {
         console.log("stopButton clicked");
         countRecordings++;
         if (countRecordings != 0) {
            recordButton.innerHTML = "Restart Recording!";
         }
 
         //disable the stop button, enable the record too allow for new recordings
         stopButton.disabled = true;
         recordButton.disabled = false;
         pauseButton.disabled = true;
 
         //reset button just in case the recording is stopped while paused
         pauseButton.innerHTML="Pause";
         
         //tell the recorder to stop the recording
         recorder.stop();
 
         //stop microphone access
         gumStream.getAudioTracks()[0].stop();
         
     }
 
     function createDownloadLink(blob) {
         
         var url = URL.createObjectURL(blob);
         var au = document.createElement('audio');
         var li = document.createElement('li');
         var link = document.createElement('a');
         var recordingsList = document.getElementById("recordingsList")
 
         //add controls to the <audio> element
         au.controls = true;
         au.src = url;
 
         //link the a element to the blob
         link.href = url;
         link.download = new Date().toISOString() + '.'+extension;
         link.innerHTML = link.download;
 
         //add the new audio and a elements to the li element
         li.appendChild(au);
         li.appendChild(link);
 
         //add the li element to the ordered list
         recordingsList.appendChild(li);
     }


    return (
        <Container>
            {/* <link href="//releases.transloadit.com/uppy/robodog/v2.5.1/robodog.min.css" rel="stylesheet"/>
            <script src="//releases.transloadit.com/uppy/robodog/v2.5.1/robodog.min.js"></script> */}
            <div>
    	        <div id="controls">
    	            <button className="rbutton" id="recordButton">Record</button>
    	            <button className="rbutton" id="pauseButton" disabled>Pause</button>
    	            <button className="rbutton" id="stopButton" disabled>Stop</button>
                </div>
                <div id="formats"></div>
    	        <p><strong>Recordings:</strong></p>
    	        <ol id="recordingsList"></ol>
            </div>
        </Container>
    );
}

export default Recorder;