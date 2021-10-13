function runSpeechRecognition() {
  // get output div reference
  const output = document.getElementById('output');
  // get action element reference
  const action = document.getElementById('action');
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    action.innerHTML = '<small>listening, please speak...</small>';
  };
  recognition.onspeechend = function () {
    action.innerHTML = '<small>stopped listening, hope you are done...</small>';
    recognition.stop();
  };
  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    console.log(event.results[0][0])
    const transcript = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    output.innerHTML =
      '<b>Text:</b> ' +
      transcript +
      '<br/> <b>Confidence:</b> ' +
      confidence * 100 +
      '%';
    output.classList.remove('hide');
  };
  // start recognition
  recognition.start();
}

document.querySelector('input').addEventListener('click' ,runSpeechRecognition );