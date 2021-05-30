var rtBtn = document.getElementById("returnButton");
var showScore = document.getElementById("currentscore");
var scoreBtn = document.getElementById("scoreSubmit");
var formEl = document.getElementById("scoreForm");
var contentEl = document.getElementById("content");
var highScores = [];

var score = localStorage.getItem("score");
showScore.textContent = score;

rtBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

scoreBtn.addEventListener("click", function () {
  rtBtn.remove();
  scoreBtn.remove();
  formEl.remove();
  contentEl.textContent = "";
});
