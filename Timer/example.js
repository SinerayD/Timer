const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let timerInterval;
let startTime;
let elapsedTime = 0;


function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((milliseconds % 60000) / 1000).toString().padStart(2, '0');
  const millisecondsFormatted = (milliseconds % 1000).toString().padStart(3, '0');
  return `${minutes}:${seconds}:${millisecondsFormatted}`;
}


function updateTimer() {
  const currentTime = Date.now();
  const elapsed = currentTime - startTime + elapsedTime;
  timer.textContent = formatTime(elapsed);
}


function setButtonStates(start, stop, reset) {
  startButton.disabled = start;
  stopButton.disabled = stop;
  resetButton.disabled = reset;
}


startButton.addEventListener('click', function () {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
  setButtonStates(true, false, true);
});


stopButton.addEventListener('click', function () {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
  setButtonStates(false, true, false);
});


resetButton.addEventListener('click', function () {
  clearInterval(timerInterval);
  timer.textContent = '00:00:000';
  elapsedTime = 0;
  setButtonStates(false, true, true);
});


