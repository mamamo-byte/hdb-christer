function startSurprise() {
  const dream = document.getElementById("dream").value;
  if (!dream) {
    alert("Please choose his dream first!");
    return;
  }

  document.getElementById("start").classList.add("hidden");
  document.getElementById("dark").classList.remove("hidden");

  // After 3 seconds, go to countdown
  setTimeout(() => {
    document.getElementById("dark").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");
    startCountdown();
  }, 3000);
}

function startCountdown() {
  let count = 10;
  const timer = document.getElementById("timer");

  const interval = setInterval(() => {
    count--;
    timer.textContent = count;
    if (count <= 0) {
      clearInterval(interval);
      showFinal();
    }
  }, 1000);
}

function showFinal() {
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}
