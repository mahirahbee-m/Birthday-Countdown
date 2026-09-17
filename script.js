// Set your boyfriend's birthday here (Year: 2026, Month: 9 for October, Day: 4)
const birthdayDate = new Date(2026, 9, 4, 0, 0, 0).getTime(); 

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown-box").classList.add("hidden");
    document.getElementById("birthday-message").classList.remove("hidden");
  }
}, 1000);