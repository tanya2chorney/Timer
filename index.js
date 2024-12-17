// Завдання 1
const timerElement = document.getElementById("timer");
const message = document.getElementById("message");

let seconds = 90;

function timerFormat(seconds) {
  const minutesFormat = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsFormat = String(Math.floor(seconds % 60)).padStart(2, "0");

  return `${minutesFormat}хв : ${secondsFormat}с`;
}
function timer() {
  if (seconds > 0) {
    seconds--;
    timerElement.textContent = timerFormat(seconds);
  }
  if (seconds < 45) {
    message.textContent = `Залишилось менше половини часу`;
  }
  if (seconds === 0) {
    message.textContent = `Час закінчився`;
  }
}
const setIntervalId = setInterval(timer, 1000);

// Завдання 2

const secondsTimer = document.getElementById("second-timer");
const btn = document.getElementById("btn-timer");
let millisec = 30000;
let intervalId;
btn.addEventListener("click", startTimer);

function millisecFormat(millisec) {
  const secFormat = String(Math.floor(millisec / 1000)).padStart(2, "0");
  const millisecFormat = String(millisec % 1000).padStart(3, "0");
  return `${secFormat}с : ${millisecFormat}мс`;
}
function millisecTimer() {
  if (millisec > 0) {
    millisec -= 1;
    secondsTimer.textContent = millisecFormat(millisec);
    btn.style.display = "none";
  } else {
    btn.style.display = "contents";
  }
  if (millisec <= 10000) {
    secondsTimer.style.color = "red";
  }
}

function startTimer() {
  millisec = 30000;
  millisecTimer();
  intervalId = setInterval(millisecTimer, 1);
}
