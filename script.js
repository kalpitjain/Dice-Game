var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = "images/dice" + randomVariable1 + ".png";
document.querySelector(".img2").src = "images/dice" + randomVariable2 + ".png";

if (randomVariable1 > randomVariable2) {
  document.querySelector(".heading").textContent = "🚩 Player 1 Wins!";
} else if (randomVariable2 > randomVariable1) {
  document.querySelector(".heading").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".heading").textContent = "It's a Draw!";
}
