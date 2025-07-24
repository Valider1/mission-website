// Countdown
const departureDate = new Date(2025, 9, 15); // Oct 15, 2025
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const timeLeft = departureDate - now;

  if (timeLeft < 0) {
    countdownEl.innerHTML = "✈️ I'm currently serving in the field!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = `📅 <strong>${days} days</strong> until I report!`;
}

// Typing Effect
const verse = "“Behold, I am a disciple of Jesus Christ.” – 3 Nephi 5:13";
let i = 0;

function typeText() {
  if (i < verse.length) {
    document.getElementById("verse").innerHTML += verse.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}

window.onload = () => {
  updateCountdown();
  typeText();
};
