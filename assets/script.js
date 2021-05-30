var timerEl = document.getElementById("timer");
var timeCount = document.getElementById("timeCount");
var time = 45;

function startTimer() {
  timer = setInterval(function () {
    time--;
    timeCount.textContent = time;
    if (time == 0) {
      alert("YOU LOSE!");
      clearInterval(timer);
    }
  }, 1000);
}
