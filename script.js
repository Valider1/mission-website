// Set your departure date (yyyy, mm - 1, dd)
const departureDate = new Date(2025, 9, 15); // October 15, 2025
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const timeLeft = departureDate - now;

  if (timeLeft < 0) {
    countdownEl.innerHTML = "I'm on my mission!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = `<h3>${days} days until I report!</h3>`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
