var timerEl = document.getElementById("timer");
var timeCount = document.getElementById("timeCount");
var startButton = document.getElementById("startButton");
var contentEl = document.getElementById("content");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answerText");
var time = 45;
var qIndex = 0;

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

function renderQuestion() {
  questionEl.textContent = "";
  answerEl.textContent = "";
  startButton.remove();
  questionEl.textContent = questionsArray[qIndex].title;
  var qBtn = [];
  for (var i = 0; i < questionsArray[qIndex].options.length; i++) {
    qBtn[i] = document.createElement("button");
    qBtn[i].classList.add("button");
    qBtn[i].textContent = questionsArray[qIndex].options[i];
    answerEl.appendChild(qBtn[i]);
  }
  answerEl.addEventListener("click", function (event) {
    if (
      event.target.textContent.toLowerCase ===
      questionsArray[qIndex].answer.toLowerCase
    ) {
      alert("Correct!");
      renderQuestion();
    }
  });
}

startButton.addEventListener("click", function () {
  renderQuestion();
  //startTimer();
});
