const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Tak!",
  "Nie.",
  "Może.",
  "Ciężko powiedzieć...",
  "Nie chcesz znać odpowiedzi na to pytanie...",
];

const shakeBall = () => {
  ball.classList.add("shake-animaton");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?".';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakieś pytanie!";
    answer.textContent = "";
  }

  ball.classList.remove("shake-animaton");
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 5);
  answer.innerHTML = `Odpowiedź:${answersArr[number]}`;
};
const enterCheck = (event) => {
  if (event.key === "Enter") {
    shakeBall();
  }
};


ball.addEventListener("click", shakeBall);
input.addEventListener("keyup", enterCheck);
