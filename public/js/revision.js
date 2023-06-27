document.getElementById("answerdisplay").addEventListener("click", function () {
  document.getElementById("answer").style.display = "block";
  document.getElementById("btn").style.display = "block";
  document.getElementById("btn2").style.display = "block";
});

const questionElement = document.querySelector(".flashcard h1");
const answerElement = document.querySelector(".flashcard #answer");
const correctButton = document.querySelector("#btn");
const wrongButton = document.querySelector("#btn2");

let flashcards = [];
let currentFlashcardIndex = 0;
let repeatFlashcards = [];
let remainingFlashcards = [];

function displayNextFlashcard(repeatDelay) {
  if (repeatDelay) {
    const repeatFlashcard = flashcards[currentFlashcardIndex];
    setTimeout(() => {
      flashcards.push(repeatFlashcard);
    }, repeatDelay);
  }
  if (remainingFlashcards.length === 0) {
    if (flashcards.length === 0) {
      alert(
        "All flashcards have been shown and there are no new flashcards remaining!"
      );
      return;
    }
    remainingFlashcards = [...flashcards];
  }
  currentFlashcardIndex = Math.floor(
    Math.random() * remainingFlashcards.length
  );
  const flashcard = remainingFlashcards[currentFlashcardIndex];
  remainingFlashcards.splice(currentFlashcardIndex, 1);
  questionElement.textContent = flashcard.question;
  answerElement.textContent = flashcard.answer;
  answerElement.style.display = "none";
  correctButton.style.display = "none";
  wrongButton.style.display = "none";
}

correctButton.addEventListener("click", () => {
  displayNextFlashcard(24 * 60 * 60 * 1000); // 1 day
});

wrongButton.addEventListener("click", () => {
  displayNextFlashcard(60 * 1000); // 1 minute
});

fetch("http://localhost:3000/flashcards")
  .then((response) => response.json())
  .then((data) => {
    flashcards = data;
    displayNextFlashcard();
  });
