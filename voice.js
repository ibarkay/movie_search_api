/* JS comes here */
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
    action.innerHTML = '<small>👌 </small>';
    recognition.stop();
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    const { transcript } = event.results[0][0];
    const { confidence } = event.results[0][0];
    userInput.value = `${transcript}`;

    console.log(`🏊 ${transcript}`,userInput);
    console.log(btn);
    btn.click();
    output.classList.remove('hide');
  };

  // start recognition
  recognition.start();
}
