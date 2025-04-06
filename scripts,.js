let timer = 60;
let score = 0;
let hitNum = 0;

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 154; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitNum;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (dets.target.classList.contains("bubble")) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitNum) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  }
});

runTimer();
makeBubble();
getNewHit();
s
