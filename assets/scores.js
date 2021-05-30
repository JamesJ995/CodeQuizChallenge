var rtBtn = document.getElementById("returnButton");
var showScore = document.getElementById("currentscore");
var scoreBtn = document.getElementById("scoreSubmit");
var formEl = document.getElementById("scoreForm");
var contentEl = document.getElementById("content");
var userEntry = document.getElementById("ints");
var score = localStorage.getItem("score");

showScore.textContent = score;

var savedInts = userEntry.value;
localStorage.setItem("initials", savedInts);
savedScores = {
  initials: localStorage.getItem("initials"),
  score: localStorage.getItem("score"),
};
localStorage.setItem("savedScores", JSON.stringify(savedScores));

function renderScores() {}

rtBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

scoreBtn.addEventListener("click", function () {
  contentEl.textContent = "";
  renderScores();
});
